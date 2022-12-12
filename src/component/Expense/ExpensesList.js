import React from "react";
import ExpenseItem from "./expenseItem";
import './ExpensesList.css';
const ExpensesList=(props)=>{

   
    if(props.items.length===0){
      return <h2 className='expenses-list_fallback'>No Expense Found.</h2>
    }
    return <ul className='expenses-list'>
  <span className='line'>*Tap on Expense to Remove.</span>
    {props.items.map((expense)=>(<ExpenseItem
        title={expense.title} amount={expense.amount} date={expense.date}
      key={expense.id} id={expense.id} onDelete={props.onDeleteItem}></ExpenseItem>))}
       <button onClick={props.onDeleteList} className='btn'>Clear List</button></ul>
}  

export default ExpensesList;