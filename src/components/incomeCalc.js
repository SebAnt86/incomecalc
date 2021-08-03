// we should do all the calculations by week, then if timePeriod changes, we mutiply
// this function should take:, userCategories, userRate, userHours, and a default partnerIncome

export const incomeCalc = (userRate, userHours =1, userCategories, partnerIncome =0, timePeriod) => {

//all the calculation are made weekly. At the end of the function the values are multiplied in case of different timePeriod
  let bracketOne = userCategories.bracketOne;
  let bracketTwo = userCategories.bracketTwo;
  let incomeLimit = (userCategories.incomeLimit / 2);
  let combinedLimit = (userCategories.combinedLimit / 2);
  let partnerLimit = (userCategories.partnerLimit / 2);
  let maxPayment = (userCategories.maxPayment) / 2;

  if(timePeriod === "fortnightly"){
    userHours /= 2;
  } else if (timePeriod === "monthly"){
    userHours /= 4.33;
  }

  // variables to be returned:
  let workIncomeTotal = Number(userRate * userHours);
  let deductions = 0;

  let threshold1 = 0; // how much money he made between 150 to 256
  let threshold2 = 0; // between 256 to max

  if (workIncomeTotal > incomeLimit || // user exceeds limit
    partnerIncome > partnerLimit || // partner exceeds limit
    (workIncomeTotal+partnerIncome > combinedLimit) // combined exceeds limit
    ) { 
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
      deductions = (106 * bracketOne) + threshold2;
    }
    if(partnerIncome > 1124){
      deductions =+ ((partnerIncome-1124)* .60);
    };
  }
  let totalIncome = (workIncomeTotal + maxPayment - deductions);
      
  let averageWage = Math.round(totalIncome/userHours);
  let finalGovPay= maxPayment - deductions;

  //check the timePeriod and multiply the results in the case of fortnightly or monthly
  if(timePeriod === "fortnightly"){
    totalIncome *= 2;
    workIncomeTotal *= 2;
    deductions *= 2;
    maxPayment *= 2; 
    averageWage *= 2;
    finalGovPay *= 2;
    userHours *= 2;
  } else if (timePeriod === "monthly"){
    totalIncome *= 4.33;
    workIncomeTotal *= 4.33;
    deductions *= 4.33;
    maxPayment *= 4.33; 
    averageWage *= 4.33;
    finalGovPay *= 4.33;
    userHours *= 4.33;
  }

  let calculatedDisplay = {
    totalIncome : totalIncome.toFixed(2),
    workIncomeTotal : workIncomeTotal.toFixed(2),
    deductions : deductions.toFixed(2),
    maxGovPayment: maxPayment.toFixed(2),
    averageWage,
    finalGovPay :finalGovPay.toFixed(2),
    workHours : userHours,
    timePeriod
  };

  return calculatedDisplay;
};
