import React from "react";
import ExpenseItem from "./expenseItem";
import './ExpensesList.css';
const ExpensesList=(props)=>{
    
    if(props.items.length===0){
      return <h2 className='expenses-list_fallback'>No Expense Found.</h2>
    }
    return <ul className='expenses-list'>
    {props.items.map((expense)=>(<ExpenseItem
        title={expense.title} amount={expense.amount} date={expense.date}
       key={expense.id}></ExpenseItem>))}</ul>
}  

export default ExpensesList;