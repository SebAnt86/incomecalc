import React from 'react';
import { useState } from "react";

export function Form(props) {
    const [hoursWorked, setHoursWorked] = useState(0);
    const [hourRate, setHourRate] = useState(0);
    const [userCategory, setUserCategory] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting ${hoursWorked} and ${hourRate} and ${userCategory}`)
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <h3> USER INPUT </h3>
            <label> Hours Worked:
            <input 
            type="number"
            value={hoursWorked}
            onChange={e => setHoursWorked(e.target.value)} 
            required /> <br />
            </label>

            <label> Hourly Rate:
            <input 
            type="number"
            value={hourRate}
            onChange={e => setHourRate(e.target.value)} 
            required /> <br />
            </label>

            <label> User Category:
            <input 
            type="text"
            value={userCategory}
            onChange={e => setUserCategory(e.target.value)} 
            required />
            </label>

            <input type="submit" value="Submit" />
        </div>
        </form>
    )
}

export default Form
