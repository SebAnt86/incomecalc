
// we should do all the calculations by week, then if timePeriod changes, we mutiply
// this function should take:, userCat, userRate, userHours, and a default partnerIncome
import {userCategories} from "./govTables.js";

const incomeCalc = (userRate,userHours, userCat) => {

// variables to be returned:
let workIncomeTotal = userRate * userHours;
let deductions = 0;

let threshold1 =  ((workIncomeTotal - 150) * userCat.bracketOne).toFixed(2);// how much money he made between 150 to 256
let threshold2 = 0;// between 256 to max

if (workIncomeTotal > userCat.incomeLimit){ //<-- if total income higher than limit
    deductions = userCat.maxPayment;
} else if(workIncomeTotal < userCat.incomeLimit){
    if(workIncomeTotal < 150 ){
        deductions = 0;
    } else if(workIncomeTotal > 150 && workIncomeTotal < 257){  // deduction from 150 to 256
        deductions = threshold1;
    } else if(workIncomeTotal > 256 && workIncomeTotal < userCat.incomeLimit){  // deduction from 256 to incomeLimit
        //console.log("256 to limit");
        threshold2 = (((workIncomeTotal- 150) - 106) * userCat.bracketTwo).toFixed(2);
        deductions = (workIncomeTotal - 150) - (106 * userCat.bracketOne) - threshold2;
    }
};
let totalIncome = parseFloat((workIncomeTotal + userCat.maxPayment - deductions).toFixed(2));
deductions = parseFloat(deductions);

let calculatedDisplay = {
    totalIncome,
    workIncomeTotal,
    deductions,
    maxGovPayment: userCat.maxPayment,
}

return(calculatedDisplay)

} 

let catSelected = 0;
let result = incomeCalc(50,4,userCategories[catSelected]);
console.log(result);
