import React from 'react';
import Person from './Person/Perosn'
const PersonData = [
    {
        "name":"Ali",
        "age":13,
        "description":"Assistant"
    },
    {
        "name":"ZAra",
        "age":24,
        "description":"Manager"
    },
    {
        "name":"Daniyal",
        "age":28,
        "description":"Operator"
    },
]
const Persons = () => {
   
    return (
        <div style={{background:'orange', padding:'1em',margin:'1em'}}>
      <h1>Persons</h1>
         {
             PersonData.map(person =>
         <Person/>) 
        }
        </div>
    )
}

export default Persons;
