import React from "react";
import { useState } from "react";
import { incomeCalc } from "./incomeCalc";
import { userCategories } from "./govTables.js";
import { Button } from "@material-ui/core";

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
  

  const handleSubmit = (evt) => {
    evt.preventDefault();
    

    if(hoursWorked < 0){
        hoursWorkWarning.style.display = "block";
        hoursWorkBool = false;
      } else{
        hoursWorkWarning.style.display = "none";
        hoursWorkBool = true;
      }
    
      if(hourRate < 0){
        hourRateWarning.style.display = "block";
        hourRateBool = false;
      } else{
        hourRateWarning.style.display = "none";
        hourRateBool = true;
      }
      
      const userCatValus = [0, 1, 2, 3, 4, 5, 6];

      if(!userCatValus.includes(userCategory)){
        userCategoryWarning.style.display = "block";
        userCategoryWarningBool = false;
      } else{
        userCategoryWarning.style.display = "none";
        userCategoryWarningBool = true;
      }


    if(hoursWorkBool && hourRateBool && userCategoryWarningBool){
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
    <form onSubmit={handleSubmit} id="userForm" className="form">
      <div>
        <h2> USER INPUT </h2>
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
            <option>Please select a category</option>
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
        <Button  type="submit" value="Submit" variant="contained">Submit</Button>
        <Button variant="contained"
        onClick={()=>{setHoursWorked("");
                              setHourRate("");
                              setPartnerIncome("");
                              setUserCategory("");
                              setTimePeriod("");}}>Reset</Button>
       
      </div>
    </form>
  );
}

export default Form;
