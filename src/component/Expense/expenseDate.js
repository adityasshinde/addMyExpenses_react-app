import styles from './expenseDate.module.css';
function expenseDate(props){
     const month=props.date.toLocaleString('en-US',{month:'long'});
     const day=props.date.toLocaleString('en-US',{day:'2-digit'});
     const year=props.date.getFullYear();
    return(
         <div className={`${styles['date']}`}>
            <span className={`${styles['m']}`}>{month}</span>
            <span className={`${styles['y']}`}>{year}</span>
            <span className={`${styles['d']}`}>{day}</span>
         </div>
    );
}

export default expenseDate;