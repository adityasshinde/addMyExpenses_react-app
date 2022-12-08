import Expense from './component//Expense/expense.js';
import './App.css';
import NewExpense from './component/newExpense/newExpense.js';
import { useState } from 'react';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Laptop Accessories',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]; 
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
