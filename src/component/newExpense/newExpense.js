import React, { useState } from "react";
import styles from './newExpense.module.css';
import ExpenseForm from "./expenseForm";
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
         ...enteredExpenseData,
         id:Math.floor(Math.random() * 10000).toString()
        };
        props.onAddExpense(expenseData);
     };
     const [isEditing,setIsEditing]=useState(false);
     const clickHandler=()=>{
        setIsEditing(true);
     };
    const setCancleEditing=()=>{
        setIsEditing(false);
     }
   return(
    <div className={`${styles['new-expense']}`}>
        {!isEditing && <button onClick={clickHandler}>Add new Expense</button>}
       {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={setCancleEditing}></ExpenseForm>}
    </div>
   );
};

export default NewExpense;