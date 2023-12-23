import React from "react";

import Card from "../UI/Card";

import './UsersList.css';

const UsersList = props =>{
    return(
        <Card className='users'>
            <ul>
                {props.users.map(user =>{
                    return <li key={user.id}>
                        {user.name} ({user.age} years old) (From {user.college} college)
                    </li>
                })}
            </ul>
        </Card>

    )
};

export default UsersList;

