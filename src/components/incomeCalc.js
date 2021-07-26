
// we should do all the calculations by week, then if timePeriod changes, we mutiply
// this function should take:, userCat, userRate, userHours, and a default partnerIncome
import {userCategories as userCat} from "./govTables.js";

function incomeCalc(userRate,userHours) {

// variables to be returned:
let workIncomeTotal = userRate * userHours;

let deductions = 0;


// 300  (106 * limit1) ( 150-256)
let threshold1 =  ((workIncomeTotal - 150) * userCat[0].bracketOne).toFixed(2);// how much money he made between 150 to 256
let threshold2 = 0;// between 256 to max

if (workIncomeTotal > userCat[0].incomeLimit){ //<-- if total income higher than limit
    deductions = userCat[0].maxPayment;
} else if(workIncomeTotal < userCat[0].incomeLimit){
    if(workIncomeTotal < 150 ){
        deductions = 0;
    } else if(workIncomeTotal > 150 && workIncomeTotal < 257){  // deduction from 150 to 256
        deductions = threshold1;
    } else if(workIncomeTotal > 256 && workIncomeTotal < userCat[0].incomeLimit){  // deduction from 256 to incomeLimit
        //console.log("256 to limit");
        threshold2 = (((workIncomeTotal- 150) - 106) * userCat[0].bracketTwo).toFixed(2);
        deductions = (workIncomeTotal - 150) - (106 * userCat[0].bracketOne) - threshold2;
    }
};

totalIncome = (workIncomeTotal + userCat[0].maxPayment - deductions).toFixed(2);
console.log(`User worked ${workIncomeTotal} , was elegible for ${userCat[0].maxPayment} but got deducted ${deductions} `);
console.log(totalIncome);
}

incomeCalc(50,3);