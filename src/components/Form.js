import React from "react";
import { useState } from "react";
import { incomeCalc } from "./incomeCalc";
import { userCategories } from "./govTables.js";

export function Form(props) {
  const { setResult } = props;
  const [hoursWorked, setHoursWorked] = useState("");
  const [hourRate, setHourRate] = useState("");
  const [userCategory, setUserCategory] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const finalCalc = incomeCalc(
      hourRate,
      hoursWorked,
      userCategories[userCategory]
    );
    setResult(finalCalc);
    
     // reset the form 
    // setHoursWorked("");
    // setHourRate("");
    // setUserCategory("");
    // document.getElementById("userForm").reset();
  };
  return (
    <form onSubmit={handleSubmit} id="userForm">
      <div>
        <h3> USER INPUT </h3>
        <label>
          
          Hours Worked:
          <input
            type="number"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)}
            placeholder="ex. 20"
            required
          />
          <br />
        </label>

        <label>
          
          Hourly Rate:
          <input
            type="number"
            value={hourRate}
            onChange={(e) => setHourRate(e.target.value)}
            placeholder="ex. 20"
            required
          />
          <br />
        </label>

        <label>
          
          User Category:
          <select onChange={(e) => setUserCategory(Number(e.target.value))}>
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

        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default Form;
