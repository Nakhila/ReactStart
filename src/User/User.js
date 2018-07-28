import React from 'react';
import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';
const User = (props) => {
return (
    <div>
        <p>this is app</p>
        <UserInput changed={(event) => {props.change(event)}} valueChanged={props.nameChanged}/>
        <UserOutput name={props.currentName} click={()=>{props.clickthis('switching')}}/>
    </div>
);
}

export default User;