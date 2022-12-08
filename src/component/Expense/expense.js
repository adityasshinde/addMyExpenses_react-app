import React,{useState} from 'react';
import './expense.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
import ExpensesFilter from '../newExpense/ExpensesFilter';
function Expense(props){
  

    // const complete=()=>{
    //      setTitle('Updated!');
    // }
    const [selectedYear,setEnteredYear]=useState('2022');
    const filteredYear=(userSelectedYear)=>{
      setEnteredYear(userSelectedYear);
    };
    const filteredExpenses=props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===selectedYear;
      });

   
    return(<li>
        <div className='mainExpenseDiv'>
             <ExpensesFilter selected={selectedYear} onFilter={filteredYear} className='fil'></ExpensesFilter>
             <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
             <ExpensesList items={filteredExpenses}></ExpensesList>
              {/* above line instruction is a part of useState implementation */}
             {/* <button onClick={complete} className='btn'>Submit</button> */}
        </div></li>
    );
}
export default Expense;