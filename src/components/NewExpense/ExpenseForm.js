import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  //Input handlers
  const titleChangeHandler = (ev) => {
    // setEnteredTitle(ev.target.value);
    // This method is impracticale because React schedules state updates so if your code has a lot of state updates at the same time, there is a chance you would use an outdated or incorrect state sna
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: ev.target.value,
    // });

    // With this approach you guarantee that you always use the latest state snapshot
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: ev.target.value };
    });
  };
  const amountChangeHandler = (ev) => {
    // setEnteredAmount(ev.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: ev.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: ev.target.value };
    });
  };
  const dateChangeHandler = (ev) => {
    // setEnteredDate(ev.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: ev.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, enteredDate: ev.target.value };
    });
  };

  //Submit Handler
  const submitHandler = (ev) => {
    ev.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    //This is the way our form communicates with it's parent, NewExpense component
    props.onSaveExpenseData(expenseData);

    //Clears the input forms on data submission
    setUserInput(() => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // Two-way binding - You can gather user input, but also change it later
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
