import styles from './expenseItem.module.css';
import ExpenseDate from './expenseDate';
function expenseItem(props){
     const deleteHandler=()=>{
          props.onDelete(props.id);
        }
    return (<div className={`${styles['item']}`} onClick={deleteHandler} >
         <ExpenseDate date={props.date}></ExpenseDate>
        <h2 className={`${styles['inf']}`}>{props.title}</h2>
        <p className={`${styles['amt']}`}>Rs.{props.amount}</p>
        
     </div>);
}

export default expenseItem;