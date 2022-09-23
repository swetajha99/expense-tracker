import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const expenseArray = [];
 localStorage.setItem('datakey', JSON.stringify(expenseArray));
function App() {
  const[expenses, setExpenses] =useState(expenseArray)

  const addExpenses = (expense) => { 
  //  setExpenses([expense,...expenses]);
  setExpenses(prevExpenses=>{
    return [expense, ...prevExpenses]
  })
  }
 
   
  return (
    <div className="App">
    <NewExpense onAddExpense = {addExpenses}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
