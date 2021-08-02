// we should do all the calculations by week, then if timePeriod changes, we mutiply
// this function should take:, userCategories, userRate, userHours, and a default partnerIncome

export const incomeCalc = (userRate, userHours =1, userCategories, partnerIncome =0, timePeriod = "weekly") => {

  let bracketOne;
  let bracketTwo;
  let incomeLimit;
  let combinedLimit;
  let partnerLimit;
  let maxPayment;

  if(timePeriod === "weekly"){
      bracketOne = (userCategories.bracketOne / 2);
      bracketTwo = (userCategories.bracketTwo / 2);
      incomeLimit = (userCategories.incomeLimit / 2);
      combinedLimit = (userCategories.combinedLimit / 2);
      partnerLimit = (userCategories.partnerLimit / 2);
      maxPayment = (userCategories.maxPayment / 2);
  }else if(timePeriod === "fortnightly"){
      bracketOne = userCategories.bracketOne;
      bracketTwo = userCategories.bracketTwo;
      incomeLimit = userCategories.incomeLimit;
      combinedLimit = userCategories.combinedLimit;
      partnerLimit = userCategories.partnerLimit;
      maxPayment = userCategories.maxPayment;
  } else if (timePeriod === "monthly"){
      bracketOne = (userCategories.bracketOne / 2) * 4.33;
      bracketTwo = (userCategories.bracketTwo / 2) * 4.33;
      incomeLimit = (userCategories.incomeLimit / 2) * 4.33;
      combinedLimit = (userCategories.combinedLimit / 2) * 4.33;
      partnerLimit = (userCategories.partnerLimit / 2) * 4.33;
      maxPayment = (userCategories.maxPayment / 2) * 4.33;
  }

  // variables to be returned:
  const workIncomeTotal = Number(userRate * userHours);
  let deductions = 0;

  let threshold1 = Number(((workIncomeTotal - 150) * bracketOne).toFixed(2)); // how much money he made between 150 to 256
  let threshold2 = 0; // between 256 to max

  if (workIncomeTotal > incomeLimit || // user exceeds limit
    partnerIncome > partnerLimit || // partner exceeds limit
    (workIncomeTotal+partnerIncome > combinedLimit) // combined exceeds limit
    ) { 
      console.log("exceeded");
    deductions = maxPayment;
  } else if (workIncomeTotal < incomeLimit) {
      // deduction from 0 to 150
    if (workIncomeTotal < 150) {
      deductions = 0;
    } else if (workIncomeTotal > 150 && workIncomeTotal < 257) {
      // deduction from 150 to 256
      threshold1 = ((workIncomeTotal - 150) * bracketOne); // how much money he made between 150 to 256
      deductions = threshold1;
    } else if (workIncomeTotal > 256 && workIncomeTotal < incomeLimit) {
      // deduction from 256 to incomeLimit
      threshold2 = ((workIncomeTotal - 150 - 106) * bracketTwo);
    

      deductions = Math.round((106 * bracketOne) + threshold2);
    }
    if(partnerIncome > 1124){
      deductions =+ ((partnerIncome-1124)* .60);
    };
  }
  const totalIncome = (workIncomeTotal + maxPayment - deductions);
      
  let averageWage = Math.round(totalIncome/userHours);
  const finalGovPay= maxPayment - deductions;

  let calculatedDisplay = {
    totalIncome : totalIncome.toFixed(2),
    workIncomeTotal : workIncomeTotal.toFixed(2),
    deductions : deductions.toFixed(2),
    maxGovPayment: maxPayment.toFixed(2),
    averageWage,
    finalGovPay :finalGovPay.toFixed(2),
    workHours : userHours,
  };

  return calculatedDisplay;
};
