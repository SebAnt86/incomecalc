
// we should do all the calculations by week, then if timePeriod changes, we mutiply

// this function should take:, userCat, userRate, userHours, and a default partnerIncome

function incomeCalc() {

// to workout the logic, lets start with fake values

let userCat = [{ // <-- using this as an example, but it should be read from userCat
    catName : 'Single',
    maxPayment : 620.80,
    incomeLimit: 1217.00,
    bracketOne : .50, // 50 cents for each dollar over $150 
    bracketTwo : .60, // 60 cents for each dollar over $256 
    
},{ // <-- using this as an example, but it should be read from userCat
    catName : 'Partnered',
    maxPayment : 565.40,
    incomeLimit: 1123.17,
    categoryPartnerLimit: 2079.50,
    bracketOne : .50, // 50 cents for each dollar over $150 
    bracketTwo : .60, // 60 cents for each dollar over $256 
    
}];

let userRate = 50;
let userHours= 6; 
// defining the variables to be returned:

let totalIncome = 0; //total of (totalHours x userRate ) + (maxPayment - deductions) 
let deductions = 0;

let workIncomeTotal = userRate * userHours;

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

incomeCalc();