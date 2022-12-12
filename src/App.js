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

  const deleteItemHandler=(delkey)=>{
      setExpenses(expenses=>{
        const updated=expenses.filter(expense=>expense.id!==delkey);
        return updated;
      });
  };
  const deleteListHandler=()=>{
    setExpenses(expenses=>{
      const updated=expenses.filter(expense=>expense.id==='abc');
      return updated;
    });
  };
  return (
    <div className="App">
      <h1>addMyExpenses.com</h1>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expense items={expenses} onDeleteItemC={deleteItemHandler} onDeleteListC={deleteListHandler}></Expense>
    </div>
  );
}

export default App;
