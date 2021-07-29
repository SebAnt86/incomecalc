import React from "react";
import { Table, TableRow ,TableCell,TableBody } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Result(props) {
  const { result } = props;
  const classes = useStyles();
  // const classes = useStyles();
  // if (!result) {
  //   return <div> EMPTY </div>;
  // }
  const finalGovPay= Number((result.maxGovPayment - result.deductions).toFixed(2));
  console.log(typeof(finalGovPay));
  return (
    <div className="result">
      <h2 className="result_heading"> RESULT </h2>
      {/* <TableContainer component={Paper}> */}
      <Table className={classes.table}  aria-label="simple table">
          {/* <div> */}
        <TableBody>
          <TableRow>
             <TableCell>Income from working:</TableCell>
              <TableCell align="right">
                {result.workHours} hours is ${result.workIncomeTotal}
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
              ${finalGovPay}</TableCell>
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
