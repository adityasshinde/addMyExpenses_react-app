import styles from './expenseItem.module.css';
import ExpenseDate from './expenseDate';
function expenseItem(props){
    return (<div className={`${styles['item']}`}>
         <ExpenseDate date={props.date}></ExpenseDate>
        <h2 className={`${styles['inf']}`}>{props.title}</h2>
        <p className={`${styles['amt']}`}>Rs.{props.amount}</p>
     </div>);
}

export default expenseItem;