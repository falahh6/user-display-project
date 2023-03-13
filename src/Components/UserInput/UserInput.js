import React , { useState , useRef} from "react";
import Card from "../Card/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from './UserInput.module.css';

const UserInput = (props) =>{
    const [error, setError] = useState(null);

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    function formSubmitHandler(event){
        event.preventDefault();
        let enteredName = nameInputRef.current.value;
        let enetredAge = ageInputRef.current.value;
        if( enteredName.trim().length === 0 ){
            setError({
                title : 'Invalid Inputs',
                message : 'Please Enter the Correct inputs'
            })
            return;
        }
        if( +enetredAge < 18){
            setError({
                title : 'User Not Accepted',
                message : 'The users age must be 18 or greater in order to use this Platform'
            })
            return;
        }

        props.onAddUser(enteredName, enetredAge);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }
    const errorHandler = () =>{
        setError(null);
    }

    return (
        <>
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
                    <input  type="text" ref={nameInputRef} />

                    <label htmlFor="">Enter User Age : </label>
                    <input  type="number"  ref={ageInputRef}/>
                    <Button>Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default UserInput;