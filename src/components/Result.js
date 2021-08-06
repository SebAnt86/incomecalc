import React from "react";
import { Table, TableRow, TableCell, TableBody } from "@material-ui/core";
// import { makeStyles } from '@material-ui/core/styles';

function Result(props) {
  const { result } = props;
  const workIncomeTotal = result.workIncomeTotal ? result.workIncomeTotal : 0;
  let  workedHours = result.workHours ? result.workHours : 0;
  const maxGovPayment = result.maxGovPayment ? result.maxGovPayment : 0;
  const deductions = result.deductions ? result.deductions : 0;
  const finalGovPay = result.finalGovPay ? result.finalGovPay : 0;
  const totalIncome = result.totalIncome ? result.totalIncome : 0;

 
    if (result.timePeriod === "monthly") {
      workedHours = workedHours.toFixed(2);
    }


  return (
    <div className="result">
      <h2 className="_titles"> FORTNIGHTLY RESULTS </h2>
      <Table className="_table" aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Income from working {workedHours} hours is :</TableCell>
            <TableCell align="right">${workIncomeTotal}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              The goverment payment max you could receive was
            </TableCell>
            <TableCell align="right">${maxGovPayment}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Gov payment deducted by:</TableCell>
            <TableCell align="right">${deductions}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Final Gov payment received:</TableCell>
            <TableCell align="right">${finalGovPay}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell> Total income is:</TableCell>
            <TableCell align="right">${totalIncome}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Result;
