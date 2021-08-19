import React from "react";
import { useState } from "react";
import { incomeCalc } from "./incomeCalc";
import { userCategories } from "./govTables.js";

import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 300,
    maxWidth: 300,
    // change Select color to black in the next 4 lines
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black'
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
      },
  },
// cange the TextField color to black in the next lines
  cssLabel: {
    color: "black",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `black !important`,
    },
  },

  cssFocused: {
    color: "black !important",
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important",
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Form(props) {
  const { setResult } = props;

  // form fields states
  const [hoursWorked, setHoursWorked] = useState("");
  const [hourRate, setHourRate] = useState("");
  const [userCategory, setUserCategory] = useState("");
  const [partnerIncome, setPartnerIncome] = useState("");
  const [timePeriod, setTimePeriod] = useState("weekly");
  const [partnerDisp, setPartnerDisp] = useState("none");

  // validation states
  const [hoursValid, setHoursValid] = useState("none");
  const [rateValid, setRateValid] = useState("none");
  const [partnerValid, setPartnerValid] = useState("none");

  let hoursWorkBool = false;
  let hourRateBool = false;
  let partnerIncomeWarningBool = true;

  const classes = useStyles();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // validation for the hours worked input
    if (hoursWorked < 1) {
      setHoursValid("block");
      hoursWorkBool = false;
    } else {
      setHoursValid("none");
      hoursWorkBool = true;
    }

    // validation for the hours rate input
    if (hourRate < 1) {
      setRateValid("block");
      hourRateBool = false;
    } else {
      setRateValid("none");
      hourRateBool = true;
    }

    // validation for the partner income
    if (userCategory === 5 || userCategory === 6) {
      partnerIncomeWarningBool = false;
      if (partnerIncome < 1) {
        setPartnerValid("block");
        partnerIncomeWarningBool = false;
      } else {
        setPartnerValid("none");
        partnerIncomeWarningBool = true;
      }
    }

    //check if all the required fields are vilid before strating the calculation
    if (hoursWorkBool && hourRateBool && partnerIncomeWarningBool) {
      const finalCalc = incomeCalc(
        hourRate,
        hoursWorked,
        userCategories[userCategory],
        partnerIncome,
        timePeriod
      );

      setResult(finalCalc);
    }
  };

  // function to reset the form's fields
  const formReset = () => {
    // reset fields
    setUserCategory("");
    setHoursWorked("");
    setHourRate("");
    setPartnerIncome("");
    setTimePeriod("weekly");

    // reset the warning spans
    setHoursValid("none");
    setRateValid("none");
    setPartnerValid("none");
    setPartnerDisp("none");

    // reset the result's values
    let resetValues = {
      workHours: 0,
      workIncomeTotal: 0,
      maxGovPayment: 0,
      deductions: 0,
      finalGovPay: 0,
      totalIncome: 0,
    };

    setResult(resetValues);
  };

  // function to handle the category
  const handleChangeCategory = (e) => {
    setUserCategory(e.target.value);

    // show the Partner income field when one of the partner options are selected
    if (e.target.value === 5 || e.target.value === 6) {
      setPartnerDisp("block");
    } else {
      setPartnerDisp("none");
    }
  };

  return (
    <>
      <Container maxWidth="md" className="form-container">
        <form onSubmit={handleSubmit}>
          <FormGroup mx={{ xs: 3 }}>
            <Box mt={{ xs: 3 }}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="time_period-label">Time Period</InputLabel>
                <Select
                  labelId="time_period-label"
                  id="time_period"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                  label="Time Period"
                  required
                >
                  <MenuItem value={"weekly"}>Weekly</MenuItem>
                  <MenuItem value={"fortnightly"}>Fortnightly</MenuItem>
                  <MenuItem value={"monthly"}>Monthly</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box mt={{ xs: 3 }}>
              <TextField
                label="Hours Worked"
                type="number"
                InputLabelProps={{
                  shrink: true,
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                InputProps={{
                  classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                  },
                  inputMode: "numeric",
                }}
                variant="outlined"
                placeholder="e.g. 20"
                value={hoursWorked}
                onChange={(e) => setHoursWorked(e.target.value)}
                required
                className={classes.formControl}
              />
              <FormHelperText>Required</FormHelperText>
              <Box component="p" display={hoursValid} mt={{ xs: -1 }}>
                <FormHelperText className="validation">
                  Please provide a positive number.
                </FormHelperText>
              </Box>
            </Box>

            <Box mt={{ xs: 3 }}>
              <TextField
                label="Hourly Rate"
                type="number"
                InputLabelProps={{
                    shrink: true,
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: "numeric",
                  }}
                variant="outlined"
                placeholder="e.g. 20.33"
                value={hourRate}
                onChange={(e) => setHourRate(e.target.value)}
                required
                className={classes.formControl}
              />
              <FormHelperText>Required</FormHelperText>
              <Box component="p" display={rateValid} mt={{ xs: -1 }}>
                <FormHelperText className="validation">
                  Please provide a positive number.
                </FormHelperText>
              </Box>
            </Box>

            <Box mt={{ xs: 3 }} component="div" display={partnerDisp}>
              <TextField
                label="Partner Income"
                type="number"
                InputLabelProps={{
                    shrink: true,
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                    inputMode: "numeric",
                  }}
                variant="outlined"
                placeholder="e.g. 800"
                value={partnerIncome}
                onChange={(e) => setPartnerIncome(e.target.value)}
                className={classes.formControl}
              />
              <FormHelperText>Required</FormHelperText>
              <Box component="p" display={partnerValid} mt={{ xs: -1 }}>
                <FormHelperText className="validation">
                  Please provide a positive number.
                </FormHelperText>
              </Box>
            </Box>

            <Box mt={{ xs: 3 }}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="user-category-label">User Category</InputLabel>
                <Select
                  labelId="user-category-label"
                  value={userCategory}
                  onChange={handleChangeCategory}
                  label="User Category"
                  required
                >
                  <MenuItem value={0}>Single, no children</MenuItem>
                  <MenuItem value={1}>
                    Single, NOT the principal carer of a dependent child or
                    children
                  </MenuItem>
                  <MenuItem value={2}>
                    Single, 60 or older, after 9 continuous months on payment
                  </MenuItem>
                  <MenuItem value={3}>
                    Single, principal carer of a dependent child or children
                  </MenuItem>
                  <MenuItem value={4}>
                    Single principal carer granted an exemption
                  </MenuItem>
                  <MenuItem value={5}>Partnered</MenuItem>
                  <MenuItem value={6}>Partnered, Partner with pension</MenuItem>
                </Select>
                <FormHelperText>Please select a category</FormHelperText>
              </FormControl>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              mt={{ xs: 3 }}
            >
              <Button
                type="submit"
                value="Submit"
                variant="contained"
                size="large"
              >
                Calculate
              </Button>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              my={{ xs: 3 }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={formReset}
                size="small"
              >
                Reset
              </Button>
            </Box>
          </FormGroup>
        </form>
      </Container>
    </>
  );
}

export default Form;
