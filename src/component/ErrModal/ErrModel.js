import React from "react";
import classes from './ErrModel.module.css';
import  ReactDOM from "react-dom";


const Backdrop=(props)=>{
           return <div className={classes.backdrop}></div>
};
const Overlay=(props)=>{
    return <div className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
        <button onClick={props.clickHandler}>Alright!</button>
    </footer>
</div>
};

const ErrModel =(props)=>{
   return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop />,document.getElementById('backdrop'))};
    {ReactDOM.createPortal(<Overlay clickHandler={props.clickHandler} message={props.message} title={props.title} />,document.getElementById('overlay'))};
   </React.Fragment>
};

export default ErrModel; 