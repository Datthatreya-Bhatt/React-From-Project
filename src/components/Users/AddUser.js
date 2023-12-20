import React, {useState} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import './AddUser.css'

const AddUser = (props) =>{
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = (event)=>{
        event.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age'
            })
            return;
        }
        if(+enteredAge < 0){
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age (age > 0 )'
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }

    const userNameChangeHandler = (event)=>{
        setEnteredUserName(event.target.value);
    };


    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    };

    const errorHandler = ()=>{
        setError(null);
    }


    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className = 'input'>

                <form onSubmit={addUserHandler}>
                    <label >User Name</label>
                    <input id="userName" type='text' value={enteredUserName} onChange={userNameChangeHandler}/>
                    <label >Age (Years)</label>
                    <input id="userAge" type='number' value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>

            </Card>
        </div>

    )

};

export default AddUser;


