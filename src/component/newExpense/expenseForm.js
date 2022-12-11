import React,{useState} from "react";
import styles from './expenseForm.module.css';
const ExpenseForm=(props)=>{
    //USING MANY STATE 
     const [isValidTitle,setIsValidTitle]=useState(true);
     const [isValidAmt,setIsValidAmt]=useState(true);
     const [isValidDate,setIsValidDate]=useState(true);
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
        if(event.target.value.trim().length>0){
          setIsValidTitle(true);
        }
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
        if(event.target.value.trim().length>0){
            setIsValidAmt(true);
          }
  setEnteredAmount(event.target.value);
// setInput({
//    ...userInput,
//    enteredAmount:event.target.value,
// });
    }
    const dateChangeHandler=(event)=>{
        if(event.target.value.trim().length>0){
            setIsValidDate(true);
          }
   setEnteredDate(event.target.value);
    // setInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // });
    }

   
    const submitHandler=(event)=>{
     event.preventDefault();//Prevents the default request to the server.
     
     if(enteredTitle.trim().length===0){
        setIsValidTitle(false);
        return;
      }
      else if(enteredAmount.trim().length===0){
        setIsValidAmt(false);
        return;
      }
      else if(enteredDate.trim().length===0){
        setIsValidDate(false);
        return;
      }
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
            <div className={`${styles['new-expense_controls']}`}>
                <div className={`${styles['new-expense_control']} ${!isValidTitle && styles.invalid}`}>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} placeholder='Enter the Title'/>
                </div>
                <div className={`${styles['new-expense_control']} ${!isValidAmt && styles.invalid}`}>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}  placeholder='Enter Amount'/>
                </div>
                <div className={`${styles['new-expense_control']} ${!isValidDate && styles.invalid}`}>
                    <label>Date</label>
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