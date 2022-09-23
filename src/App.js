import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState,useEffect } from 'react';
const expenseArray = [];
 
function App() {
  const[expenses, setExpenses] =useState(expenseArray)

  const addExpenses = (expense) => { 
  //  setExpenses([expense,...expenses]);
  setExpenses(prevExpenses=>{
    return [expense, ...prevExpenses]
  })
  }
  const addLocalStorage =(e)=>{
   e.preventDefault();
   localStorage.setItem('datakey', JSON.stringify(expenses));
  }
 useEffect(()=>{
  addLocalStorage();
 },[expenses]);
   
  return (
    <div className="App">
    <NewExpense onAddExpense = {addExpenses}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
