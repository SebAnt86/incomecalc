import React from "react";

function Result(props) {
  const { result } = props;
  if (!result) {
    return <div> EMPTY CARAJO</div>;
  }
  return (
    <div>
      <h1> RESULT INSIDE RESULT JSX</h1>
      <div>
        <p> total income is {result.totalIncome} </p>
        <p> total worked hours is {result.workIncomeTotal} </p>
        <p> total deduction is {result.deductions} </p>
        <p> max gov payment is {result.maxGovPayment} </p>
      </div>
    </div>
  );
}

export default Result;
