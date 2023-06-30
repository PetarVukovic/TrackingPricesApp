import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  /*Statovi*/
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title:enteredValue,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnteredValue('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onSaveExpenseDate(expenseData);

  };

  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" value ={enteredValue} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}> Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
