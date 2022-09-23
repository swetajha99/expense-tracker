import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState,useEffect } from 'react';

 
function App() {
   const getLocalItem = () =>{
    let expenseArray = localStorage.getItem("expenseArray");
    if(list){
      return JSON.parse(list);
    }
    else{
      return [];
    }
  }
  const[expenses, setExpenses] =useState(getLocalItem)

  const addExpenses = (expense) => { 
  //  setExpenses([expense,...expenses]);
  setExpenses(prevExpenses=>{
    return [expense, ...prevExpenses]
  })
  }
  
 useEffect(()=>{
  addLocalStorage(event);
 },[expenses]);
   
  return (
    <div className="App">
    <NewExpense onAddExpense = {addExpenses}/>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
