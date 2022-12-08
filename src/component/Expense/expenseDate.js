import './expenseDate.css';
function expenseDate(props){
     const month=props.date.toLocaleString('en-US',{month:'long'});
     const day=props.date.toLocaleString('en-US',{day:'2-digit'});
     const year=props.date.getFullYear();
    return(
         <div className="date">
            <span id='m'>{month}</span>
            <span id='y'>{year}</span>
            <span id='d'>{day}</span>
         </div>
    );
}

export default expenseDate;