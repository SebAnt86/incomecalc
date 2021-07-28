import React from "react";


function Result(props) {
  const { result } = props;
  // if (!result) {
  //   return <div> EMPTY </div>;
  // }
  const finalGovPay= Number((result.maxGovPayment - result.deductions).toFixed(2));
  console.log(typeof(finalGovPay));
  return (
    <div className="result">
      <h1> RESULT </h1>
      <div>
        <p> Income from working: {result.workHours} hours is ${result.workIncomeTotal} </p>
        <p> The goverment payment max you could receive was ${result.maxGovPayment} </p>
        <p> Gov payment deducted by:  ${result.deductions} </p>
        <p> Final Gov payment received:  ${finalGovPay} </p>
        <p> Total income  is ${result.totalIncome} </p>
     
        {/* <p> Your average wage after deduction is  {result.averageWage} </p> */}
      </div>
    </div>
  );
}

export default Result;
