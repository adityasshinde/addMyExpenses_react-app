import './expenseItem.css';
import ExpenseDate from './expenseDate';
function expenseItem(props){
    return <div className='item'>
         <ExpenseDate date={props.date}></ExpenseDate>
        <h2 className='inf'>{props.title}</h2>
        <p className='amt'>Rs. {props.amount}</p>
     </div>;
}

export default expenseItem;