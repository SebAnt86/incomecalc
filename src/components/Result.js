import React from "react";
import { Table, TableRow ,TableCell,TableBody } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';


function Result(props) {
  const { result } = props;
 

  return (
     <div className="result">
      <h2 className="_titles"> RESULT </h2>
      <Table className="_table"  aria-label="simple table">
          <TableBody>
          <TableRow>
             <TableCell>{result.timePeriod.toUpperCase()} income from working {result.workHours} hours is :</TableCell>
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
     
        </TableBody>
      </Table>

    </div>
  );
}

export default Result;
