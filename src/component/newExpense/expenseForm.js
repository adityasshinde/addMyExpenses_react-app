import React,{useState} from "react";
import './expenseForm.css';
const ExpenseForm=(props)=>{
    //USING MANY STATE 
     const [enteredTitle,setEnteredTitle]=useState('');
     const [enteredAmount,setEnteredAmount]=useState('');
     const [enteredDate,setEnteredDate]=useState('');

    //USING ONE STATE
    //   const [userInput,setInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    //   });

    const titleChangeHandler=(event)=>{
   setEnteredTitle(event.target.value);
    //    setInput({
    //     ...userInput,  //use of spread operator
    //     enteredTitle:event.target.value,
    //    });

    //ALTERNATIVE SYNTAX FOR ONE STATE METHOD
    //  setInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value};
    //  });
    }
    const amountChangeHandler=(event)=>{
  setEnteredAmount(event.target.value);
// setInput({
//    ...userInput,
//    enteredAmount:event.target.value,
// });
    }
    const dateChangeHandler=(event)=>{
   setEnteredDate(event.target.value);
    // setInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // });
    }

   
    const submitHandler=(event)=>{
     event.preventDefault();//Prevents the default request to the server.

     const expenseData={
        title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)
     };
     
   

     props.onSaveExpenseData(expenseData);
     //Clearing the previous data to add new one(add value to the input tags as eg. value={enteredTitle})
     setEnteredTitle('');
     setEnteredAmount('');
     setEnteredDate('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title:</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>Date:</label>
                    <input type='date' min="2021-01-01" max="2022-12-31" value={enteredDate}  onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="button" onClick={props.onCancle}>Cancel</button>
                <button type="submit" id="btn">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;