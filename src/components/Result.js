import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// import { makeStyles } from '@material-ui/core/styles';

function Result(props) {
  const { result } = props;
  const workIncomeTotal = result.workIncomeTotal ? result.workIncomeTotal : 0;
  let workedHours = result.workHours ? result.workHours : 0;
  const maxGovPayment = result.maxGovPayment ? result.maxGovPayment : 0;
  const deductions = result.deductions ? result.deductions : 0;
  const finalGovPay = result.finalGovPay ? result.finalGovPay : 0;
  const totalIncome = result.totalIncome ? result.totalIncome : 0;

  if (result.timePeriod === "monthly") {
    workedHours = workedHours.toFixed(2);
  }

  return (
    <>
      <TableContainer component={Paper} maxWidth="md">
        <Table aria-label="customized table">
          <TableHead className="table-head">
            <TableRow align="center">FORTNIGHTLY INCOME</TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                Income from working {workedHours} hours is:
              </TableCell>
              <TableCell align="right">${workIncomeTotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
              The goverment payment max you could receive was:
              </TableCell>
              <TableCell align="right">${maxGovPayment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
              Gov payment deducted by:
              </TableCell>
              <TableCell align="right">${deductions}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
              Final Gov payment received:
              </TableCell>
              <TableCell align="right">${finalGovPay}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
              Total income is:
              </TableCell>
              <TableCell>${totalIncome}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Result;
