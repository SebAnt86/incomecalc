
/// all 

export const userCategories = [
    {
        catID: "S1",
        catName : 'Single, no children',
        maxPayment : 620.80,
        incomeLimit: 1217.00,
        bracketOne : .50,  
        bracketTwo : .60, // 1000 600 deduce
    },
      {
        catID: "S2",
        catName : 'Single,  NOT the principal carer of a dependent child or children',
        maxPayment : 667.50,
        incomeLimit: 1296.00,
        bracketOne : .50,  
        bracketTwo : .60,
    },
    {
        catID: "S3",
        catName : 'Single, 60 or older, after 9 continuous months on payment',
        maxPayment : 667.50,
        incomeLimit: 1306.34,
        bracketOne : .50,  
        bracketTwo : .60,
    },
    {
        catID: "S4",
        catName : 'Single,  principal carer of a dependent child or children',
        maxPayment : 667.50,
        incomeLimit: 1858.00,
        bracketOne : .40,  
        bracketTwo : .40, // 1000 400 deduced 
    },
    {
        catID: "S5",
        catName : 'Single principal carer granted an exemption',
        maxPayment : 850.20,
        incomeLimit: 2321.00,
        bracketOne : .50,  
        bracketTwo : .60,
    },
    {
        catID: "P1",
        catName : 'Partnered',
        maxPayment : 565.40,
        incomeLimit: 1123.17,
        partnerLimit: 2079.50,        
        partnerBracket : 1124.00,
        bracketOne : .50,  
        bracketTwo : .60,
    },
    {
        catID: "P2",
        catName : 'Partnered, Partner with pension',
        maxPayment : 565.40,
        incomeLimit: 1123.17,
        partnerLimit: 2079.50,        
        combinedLimit: 2246.34,
        bracketOne : .50,  
        bracketTwo : .60,
    },
];

