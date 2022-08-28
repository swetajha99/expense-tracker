import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpenseFilter from './NewExpense/ExpenseFilter'
import { useState } from 'react'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState(2022)
    const filterHandler = year => {
       setFilteredYear(year);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
  return (
    <div className='expenses'>
    <ExpenseFilter selectedYear={filteredYear} 
        filter={filterHandler}/>
        {filteredExpenses.length === 0 ? (<p style={{color:'white'}}>No Expenses Found</p>) : (
    filteredExpenses.map((expense, i)=>
        <ExpenseItem key={i++} title={expense.title} amount={expense.amount} date={expense.date} />
        
    ) )}

    </div>
  )
}

export default Expenses
