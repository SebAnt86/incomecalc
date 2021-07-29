// we should do all the calculations by week, then if timePeriod changes, we mutiply
// this function should take:, userCategories, userRate, userHours, and a default partnerIncome

export const incomeCalc = (userRate, userHours =1, userCategories, partnerIncome =0) => {
  // variables to be returned:
  const workIncomeTotal = Number(userRate * userHours);
  let deductions = 0;

  let threshold1 = Number(((workIncomeTotal - 150) * userCategories.bracketOne).toFixed(2)); // how much money he made between 150 to 256
  let threshold2 = 0; // between 256 to max

  if (workIncomeTotal > userCategories.incomeLimit || // user exceeds limit
    partnerIncome > userCategories.partnerLimit || // partner exceeds limit
    (workIncomeTotal+partnerIncome > userCategories.combinedLimit) // combined exceeds limit
    ) { 
      console.log("exceeded");
    deductions = userCategories.maxPayment;
  } else if (workIncomeTotal < userCategories.incomeLimit) {
      // deduction from 0 to 150
    if (workIncomeTotal < 150) {
      deductions = 0;
    } else if (workIncomeTotal > 150 && workIncomeTotal < 257) {
      // deduction from 150 to 256
      threshold1 = ((workIncomeTotal - 150) * userCategories.bracketOne); // how much money he made between 150 to 256
      deductions = threshold1;
    } else if (workIncomeTotal > 256 && workIncomeTotal < userCategories.incomeLimit) {
      // deduction from 256 to incomeLimit
      threshold2 = ((workIncomeTotal - 150 - 106) * userCategories.bracketTwo);
    

      deductions = Math.round((106 * userCategories.bracketOne) + threshold2);
    }
    if(partnerIncome > 1124){
      deductions =+ ((partnerIncome-1124)* .60);
    };
  }
  let totalIncome = (workIncomeTotal + userCategories.maxPayment - deductions);
      
  let averageWage = Math.round(totalIncome/userHours);
  

  let calculatedDisplay = {
    totalIncome : totalIncome.toFixed(2),
    workIncomeTotal : workIncomeTotal.toFixed(2),
    deductions : deductions.toFixed(2),
    maxGovPayment: (userCategories.maxPayment),
    averageWage,
    workHours : userHours,
  };

  return calculatedDisplay;
};
