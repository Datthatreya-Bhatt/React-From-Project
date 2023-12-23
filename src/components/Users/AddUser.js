import React, {useState, useRef} from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import './AddUser.css'

const AddUser = (props) =>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const collegeInputRef = useRef();


    const [error, setError] = useState();


    const addUserHandler = (event)=>{
        event.preventDefault();

        console.log(nameInputRef.current.value)
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        const enteredUserCollege = collegeInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age'
            })
            return;
        }
        if(+enteredUserAge < 0){
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age (age > 0 )'
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge, enteredUserCollege);
            nameInputRef.current.value = '';
            ageInputRef.current.value = '';
            collegeInputRef.current.value = '';
       
    }

 

    const errorHandler = ()=>{
        setError(null);
    }


    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className = 'input'>

                <form onSubmit={addUserHandler}>
                    <label >User Name</label>
                    <input id="userName" type='text' ref={nameInputRef}/>
                    <label >Age (Years)</label>
                    <input id="userAge" type='number' ref={ageInputRef}/>
                    <label >College Name </label>
                    <input id="college" type='text' ref={collegeInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>

            </Card>
        </div>

    )

};

export default AddUser;


