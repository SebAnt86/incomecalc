import React from "react";
import { Table, TableRow ,TableCell,TableBody, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function Result(props) {
  const { result } = props;
  // const classes = useStyles();
  if (!result) {
    return <div> EMPTY </div>;
  }

  //console.log(typeof(finalGovPay));
  return (
     <div className="result">
      <h2 className="_titles"> RESULT </h2>
      {/* <TableContainer component={Paper}> */}
      <Table className="_table"  aria-label="simple table">
          {/* <div> */}
        <TableBody>
          <TableRow>
             <TableCell>Income from working {result.workHours} hours is :</TableCell>
              <TableCell align="right">
               ${result.workIncomeTotal}
              </TableCell>
            </TableRow>
          <TableRow>
            <TableCell>The goverment payment max you could receive was</TableCell>
            <TableCell align="right">
                ${result.maxGovPayment}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Gov payment deducted by:
            </TableCell>
            <TableCell align="right">
              ${result.deductions}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Final Gov payment received:</TableCell>
            <TableCell align="right">
              ${result.finalGovPay}</TableCell>
          </TableRow>
          <TableRow><TableCell> Total income  is:</TableCell>
            <TableCell align="right">${result.totalIncome}</TableCell>
          </TableRow>
     
            {/* <p> Your average wage after deduction is  {result.averageWage} </p> */}
        </TableBody>
      </Table>
        {/* </TableContainer> */}
        {/* </div> */}
    </div>
  );
}

export default Result;
