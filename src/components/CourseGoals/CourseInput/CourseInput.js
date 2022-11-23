import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
    const [isValid, setIsValid] = useState(true);

    const [enteredValue, setEnteredValue] = useState("");

    const goalInputChangeHandler = (event) => {
        if (enteredValue.trim().length > 0) {
            setIsValid(true);
        }

        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }

        props.onAddGoal(enteredValue);
    };

    return (
        <form className={isValid ? "" : "invalid"} onSubmit={formSubmitHandler}>
            <div className={`form-control ${isValid ? "" : "invalid"}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
