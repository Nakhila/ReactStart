import React from 'react';
//import UserInput from './User/UserInput.js';
import User from './User/User';
import Person from './Person/Person.js';
import Validation from './assignmntTwo/Validation';
import Char from './assignmntTwo/char';
import Classes from './App.css';
import Persons from './Person/Persons.js'


class App extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            username: 'something',
            person:[
                {id:1,name:'akhila',age:23},
                {id:2,name:'max',age:25}
            ],
            showPerson: false,
            userLength : 0,
            inputValue : 'ghhuu',
        }
        this.usernameHandler = this.usernameHandler.bind(this);
        this.nameSwitchHandler = this.nameSwitchHandler.bind(this);
        this.togglePerson = this.togglePerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);
        this.updatePersonName = this.updatePersonName.bind(this);
        this.inputChanged = this.inputChanged.bind(this);
    };

    //usernameHandler = (event) => {
    usernameHandler(event){
        this.setState({username: event.target.value});
    }
    //nameSwitchHandler = (name) => {
    nameSwitchHandler(name) {
        this.setState({username: name});
    }
    togglePerson(){
       // const personShow = this.state.showPerson;
        this.setState({showPerson: !this.state.showPerson});
    }
    deletePerson(personIndex){
        //const persons = this.state.person.slice(); // copy the person array and update the state
        const persons = [...this.state.person]; // spread op from ES6 which creates an other object by copying 
        console.log('in delete person');
        persons.splice(personIndex,1);
        this.setState({person: persons});
    }
    updatePersonName( event , id )
    {
        let personIndex = this.state.person.findIndex(p => {
            return p.id === id;
        });
        console.log('person Index'+personIndex);
        //immutable way copy the array to othet array and update the state
        const personTobeUpdated = [...this.state.person[personIndex]];
        //const personTobeUpdated = Object.assign({},this.state.person[personIndex]) // java script defualt method to fetch value from object
        personTobeUpdated.name = event.target.value;
        //console.log(personTobeUpdated.id);
        const duplicatePerson = [...this.state.person];
        //console.log(duplicatePerson);
        duplicatePerson[personIndex] = personTobeUpdated;
        this.setState({person:duplicatePerson});

    }
    inputChanged(event){
        console.log('name chnaged');
        this.setState({inputValue:event.target.value});

    }
    deleteChar(index){
        const valueArray = this.state.inputValue.split('');
        valueArray.splice(index,1);
        const inputValueDup = valueArray.join('');
        this.setState({inputValue:inputValueDup});
    }
   render() {

    let jsexample = null;
    const style= {
        backgroundColor:'red',
        padding:'16px',
        textAlign:'center',
        margin:'16px',
        border:'1px solid black',
        
    };
    let colorStyle= [Classes.personfont,Classes.red].join(' ');
    console.log(colorStyle);
    if(this.state.showPerson){
        jsexample = (
            <p>the toogglePerson can also be implemented like this</p>
            
        );
        style.backgroundColor = 'green';
       
    }
    const charList = this.state.inputValue.split('').map((letter,index) => {
           return <Char eachLetter={letter} deleteChar={this.deleteChar.bind( this , index)} />
    })
    
      return (
         
         <div>
             <User change={this.usernameHandler} 
                   nameChanged={this.state.username}
                   clickthis={this.nameSwitchHandler}
                   currentName = {this.state.username}
            />
            <h1>person component</h1>
            <button style = {style} onClick={this.togglePerson}>SHOW PERSON</button>
            <p>whatever inculded in the curly braces is a simple js</p>
            {jsexample}
            <h3 className={colorStyle}>example map</h3>

            {
                this.state.showPerson ?
              
            <div> 
                 { /*this.state.person.map((person,index) => {
                   return <Person 
                        delete={this.deletePerson.bind(this,index) }
                        name= {person.name} 
                        age={person.age} 
                        key={person.id}
                        inputChanged = {(event) => {this.updatePersonName( event , person.id )}}
                        /> */
                        <Persons 
                            person={this.state.person} 
                            clicked = {this.deletePerson}
                            changed = {this.updatePersonName}
                        />
                }

                 
              </div>  : null  
            }
            
            <h2>assignment 2 </h2>
            <input type="text" onChange={this.inputChanged} value={this.state.inputValue}/>
            <Validation inputLength={this.state.inputValue.length} />
           {charList}
         </div>
        
      );
   }
}
export default App;