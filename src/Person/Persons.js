import React,{Component} from 'react';
import Person from './Person.js';
//import classes from './Person.css'

//in class we shd be using this.props where as in stateless components ll be using props.
class Persons extends Component {
    render(){
        return (
           this.props.person.map((person,index) => {
            return <Person 
                    delete={ () => this.props.clicked(index) }
                    name= {person.name} 
                    age={person.age} 
                    key={person.id}
                    inputChanged = {(event) => {this.props.changed( event , person.id )}}
                    /> 
    })
);
}
}

/*const Persons = (props) => 
            props.person.map((person,index) => {
               return <Person 
                    delete={ () => props.clicked(index) }
                    name= {person.name} 
                    age={person.age} 
                    key={person.id}
                    inputChanged = {(event) => {props.changed( event , person.id )}}
                    /> 
    
                 })
*/
export default Persons;