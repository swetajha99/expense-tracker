import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmountChangeHandler] = useState('')
    const [date, setDateChangeHanler] = useState('')
    const titlehandler = (event) =>{
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setAmountChangeHandler(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        setDateChangeHanler(event.target.value);
    }

    const submitHandler =(e) =>{
        e.preventDefault();

        const expense ={
            title: title,
            amount: amount,
            date: new Date(date),

        }
        props.saveExpense(expense);
        setTitle('');
        setAmountChangeHandler('');
        setDateChangeHanler('');
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label className="new-expense__control_label">Title</label>
            <input type="text" value={title} className="new-expense__control_input" onChange={titlehandler}/>
          </div>
          <div className="new-expense__controls">
            <label className="new-expense__control_label">Amount</label>
            <input type="number" min="0.01" step="0.01" className="new-expense__control_input"onChange={amountChangeHandler} value={amount}/>
          </div>
          <div className="new-expense__controls">
            <label className="new-expense__control_label">Date</label>
            <input type="date"  min="2022-01-01" max="2025-12-31" className="new-expense__control_input" onChange={dateChangeHandler} value={date}/>
          </div>
        </div>
        <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
