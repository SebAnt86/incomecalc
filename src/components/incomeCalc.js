// we should do all the calculations by week, then if timePeriod changes, we mutiply
// this function should take:, userCategories, userRate, userHours, and a default partnerIncome

export const incomeCalc = (userRate, userHours =1, userCategories, partenerIncome) => {
  // variables to be returned:
  let workIncomeTotal = Number(userRate * userHours);
  let deductions = 0;

  let threshold1 = Number(((workIncomeTotal - 150) * userCategories.bracketOne).toFixed(2)); // how much money he made between 150 to 256
  let threshold2 = 0; // between 256 to max

  if (workIncomeTotal > userCategories.incomeLimit) {
    //<-- if total income higher than limit
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
  }
  let totalIncome = (workIncomeTotal + userCategories.maxPayment - deductions);
      
  let averageWage = Math.round(totalIncome/userHours);
  

  let calculatedDisplay = {
    totalIncome,
    workIncomeTotal,
    deductions,
    maxGovPayment: (userCategories.maxPayment),
    averageWage,
    workHours : userHours,
  };

  return calculatedDisplay;
};
