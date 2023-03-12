import React , { useState } from "react";
import Card from "../Card/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from './UserInput.module.css';

const UserInput = (props) =>{

    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [error, setError] = useState(null);

    function formSubmitHandler(event){
        event.preventDefault();
        if( name.trim().length === 0 ){
            setError({
                title : 'Invalid Inputs',
                message : 'Please Enter the Correct inputs'
            })
            return;
        }
        if( +age < 18){
            setError({
                title : 'User Not Accepted',
                message : 'The users age must be 18 or greater in order to use this Platform'
            })
            return;
        }
        setName('');
        setAge('');

        props.onAddUser(name, age);
    }

    
    const inputNameHandler = (event) =>{
        setName(event.target.value);
    }
    const inputAgeHandler = (event) =>{
        setAge(event.target.value);
    }
    const errorHandler = () =>{
        setError(null);
    }

    return (
        <div>
            {error &&  (
                <ErrorModal 
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
                />
            )}    
            <Card>
                <form  onSubmit={formSubmitHandler}  action="" className={styles['form-control']}>
                    <label htmlFor="">Enter User Name : </label>
                    <input value={name} onChange={inputNameHandler} type="text" />

                    <label htmlFor="">Enter User Age : </label>
                    <input value={age} onChange={inputAgeHandler} type="number" />
                    <Button>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserInput;