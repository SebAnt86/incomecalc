import React from "react";
import { useState } from "react";
import { incomeCalc } from "./incomeCalc";
import { userCategories } from "./govTables.js";
import { Button, Container } from "@material-ui/core";


export function Form(props) {
  const { setResult } = props;
  const [hoursWorked, setHoursWorked] = useState("");
  const [hourRate, setHourRate] = useState(20.33);
  const [userCategory, setUserCategory] = useState("");
  const [partnerIncome, setPartnerIncome] = useState("");
  const [timePeriod, setTimePeriod] = useState("fortnight");

  
  const hoursWorkWarning = document.getElementById("hoursWorkWarning");
  let hoursWorkBool = false;
  const hourRateWarning = document.getElementById("hourRateWarning");
  let hourRateBool = false;
  const userCategoryWarning = document.getElementById("userCategoryWarning");
  let userCategoryWarningBool = false;
  const partnerIncomeWarning = document.getElementById("partnerIncomeWarning");
  let partnerIncomeWarningBool = true;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    // validation for the hours worked input
    if(hoursWorked < 1){
        hoursWorkWarning.style.display = "block";
        hoursWorkBool = false;
      } else{
        hoursWorkWarning.style.display = "none";
        hoursWorkBool = true;
      }

    // validation for the hours rate input
      if(hourRate < 1){
        hourRateWarning.style.display = "block";
        hourRateBool = false;
      } else{
        hourRateWarning.style.display = "none";
        hourRateBool = true;
      }
      
      // validation for the user category
      const userCatValus = [0, 1, 2, 3, 4, 5, 6];

      if(!userCatValus.includes(userCategory)){
        userCategoryWarning.style.display = "block";
        userCategoryWarningBool = false;
      } else{
        userCategoryWarning.style.display = "none";
        userCategoryWarningBool = true;
      }

      // validation for the partner income 
       if(userCategory === 5 || userCategory === 6){
         partnerIncomeWarningBool = false;
         if(partnerIncome < 1){
            partnerIncomeWarning.style.display = "block";
            partnerIncomeWarningBool = false;
         }else{
            partnerIncomeWarning.style.display = "none";
            partnerIncomeWarningBool = true;
         }
       }

    //chaeck if all the required fields are vilid before strating the calculation
    if(hoursWorkBool && hourRateBool && userCategoryWarningBool && partnerIncomeWarningBool){
        const finalCalc = incomeCalc(
            hourRate,
            hoursWorked,
            userCategories[userCategory],
            partnerIncome,
          );
          
          setResult(finalCalc);
    }
    

    // reset the form
    // setHoursWorked("");
    // setHourRate("");
    // setUserCategory("");
    // document.getElementById("userForm").reset();
  };
  function ShowHideDiv() {
      const hiddenField = document.getElementById("hiddenInput");
      const selectField = document.getElementById("selectField");
    if (selectField.value === "5" || selectField.value === "6") {
      hiddenField.style.display = "block";
    } else {
      hiddenField.style.display = "none";
    }
  
  };

  return (
    <div className="form">
    <form onSubmit={handleSubmit} id="userForm" >
      <div>
      <h2 className="_titles"> INPUT </h2>
        <label>
          Time Period:
          <select
                id="time_period"
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)}>
             
            <option value="week"> Weekly </option>
            <option value="fortnight" > Fortnightly </option>
            <option value="month"> Monthly </option>
          </select>
          </label>
          {/* <br /> */}
        <label>
          Hours Worked :
          <input
            id="hoursWork"
            type="number"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)}
            placeholder="e.g. 20"
            required
          />
          {/* <br /> */}
        </label>
        <span id="hoursWorkWarning" className="validation" style={{ display: "none" }}>Please insert a positive number.</span>

        <label>
          Hourly Rate :
          <input
            type="number"
            value={hourRate}
            onChange={(e) => setHourRate(e.target.value)}
            placeholder="e.g. 20"
            required
          />
          {/* <br /> */}
        </label>
        <span id="hourRateWarning" className="validation" style={{ display: "none" }}>Please insert a positive number.</span>

        <div id="hiddenInput" style={{ display: "none" }}>
          <label>
            Partners Income:
            <input type="number" 
              value={partnerIncome}
              onChange={(e) => setPartnerIncome(e.target.value)}
              placeholder="Inc their gov assist"
             />
          </label>
          <span id="partnerIncomeWarning" className="validation" style={{ display: "none" }}>Please insert a positive number.</span>
        </div>

        <label>
          User Category:
          <select
            id="selectField"
            value={userCategory}
            onChange={(e) => {
              setUserCategory(Number(e.target.value));
              ShowHideDiv();
            }}
          >
            <option value="0" >Please select a category</option>
            <option value="0">Single, no children</option>
            <option value="1">
              Single, NOT the principal carer of a dependent child or children
            </option>
            <option value="2">
              Single, 60 or older, after 9 continuous months on payment
            </option>
            <option value="3">
              Single, principal carer of a dependent child or children
            </option>
            <option value="4">
              Single principal carer granted an exemption
            </option>
            <option value="5">Partnered</option>
            <option value="6">Partnered, Partner with pension</option>
          </select>
        </label>
        <span id="userCategoryWarning" className="validation" style={{ display: "none" }}>Please select a valid catgory.</span>
        <Button  type="submit" value="Submit" variant="contained">Calculate</Button>
        <Button variant="contained"
        onClick={()=>{setHoursWorked("");
                              setHourRate("");
                              setPartnerIncome("");
                              setUserCategory("");
                              setTimePeriod("");}}>Reset</Button>
       
      </div>
    </form>
    </div>
  );
}

export default Form;
