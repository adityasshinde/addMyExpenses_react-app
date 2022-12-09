import Expense from './component//Expense/expense.js';
import './App.css';
import NewExpense from './component/newExpense/newExpense.js';
import { useState } from 'react';
const DUMMY_EXPENSES = []; 
function App() {
 const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler=(expense)=>{
          setExpenses((prevExpense)=>{
            return [expense,...prevExpense];
          });
  };
  return (
    <div className="App">
      <h1>addMyExpenses.com</h1>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses}></Expense>
    </div>
  );
}

export default App;
