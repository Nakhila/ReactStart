import React from 'react';
import Classes from './Person.css'
const Person = (props) => {
    const style ={
        border:'1px solid black',
        padding:'12px',               
    };
    return(
        <div className={Classes.person}>
        <p onClick = {props.delete}>i am in {props.name} and my age is {props.age}</p>
        <input type = "text" onChange = {props.inputChanged} />
        </div>
    )
};

export default Person;