import React from "react";
import ReactDOM from "react-dom";
import styles from './ErrorModal.module.css';

const Backdrop = (props) =>{
    return  <div className={styles.backdrop}  onClick={props.onConfirm} />
}

const Modal = (props) =>{
    return (
        <div className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <button onClick={props.onConfirm}>Okay</button>
                </footer>
            </div>
    )
}

const ErrorModal = (props) =>{
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, 
                                    document.getElementById('Backdrop'))}
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />, 
                                    document.getElementById('Modal'))}
        </React.Fragment>
    )
}

export default ErrorModal;