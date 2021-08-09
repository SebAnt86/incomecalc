import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
      <Container maxWidth="md">
        <TableContainer component={Paper} maxWidth="md">
        <Typography variant="h6" className="table-head">FORTNIGHTLY RESULTS</Typography>
          <Table aria-label="customized table" >
            {/* <TableHead className="table-head" mt={{ xs: 3 }}>
              <TableRow align="center">FORTNIGHTLY INCOME</TableRow>
            </TableHead> */}
            <TableBody>
              <TableRow>
                <TableCell>
                  Income from working <Box component="span" fontWeight="fontWeightBold" >{workedHours}</Box> hours is:
                </TableCell>
                <TableCell align="right"><Box component="span" fontWeight="fontWeightBold" >${workIncomeTotal}</Box></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  The goverment max payment you could receive was:
                </TableCell>
                <TableCell align="right"><Box component="span" fontWeight="fontWeightBold">${maxGovPayment}</Box></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  The goverment payment has been deducted by:
                </TableCell>
                <TableCell align="right"><Box component="span" fontWeight="fontWeightBold" >${deductions}</Box></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Final goverment payment received:</TableCell>
                <TableCell align="right"><Box component="span" fontWeight="fontWeightBold" >${finalGovPay}</Box></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Box component="span" fontWeight="fontWeightBold" fontSize={18}>You total fortnightly income is:</Box></TableCell>
                <TableCell><Box component="span" fontWeight="fontWeightBold" fontSize={18}>${totalIncome}</Box></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Result;
