import React from 'react';

function Result(props) {
    console.log("i am inside result and props are: ");
    console.log(props);

    return (
        <div>
            <h1> RESULT INSIDE RESULT JSX</h1>
            <div>
                <p>  total income is {props.totalIncome} </p>
                <p>  total worked hours is {props.workIncomeTotal} </p>
                <p>  total deduction is {props.deductions} </p>
                <p>  max gov payment is {props.maxGovPayment} </p>
 
            </div>
        </div>
    )
}

export default Result
