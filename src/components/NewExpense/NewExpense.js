import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
    const saveExpense = (enteredData) =>{
       const expenseData = {
        ...enteredData,
        id: Math.random().toString()
       }
       props.onAddExpense(expenseData);
    }
  return (
    <div className='new-expense'>
      <ExpenseForm saveExpense={saveExpense} />
    </div>
  )
}

export default NewExpense
