import React from 'react';
const UserOutput = (props) => {
    return(
        <div>
            <p onClick={props.click}>This is {props.name} </p>
            <p>Keep learning new</p>
        </div>
    )
};

export default UserOutput;