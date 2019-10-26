import React from 'react';
import Person from './Person/Perosn'
const PersonData = [
    {
        "name": "Ali",
        "age": 13,
        "description": "Assistant",
        "isEditMode": true
    },
    {
        "name": "ZAra",
        "age": 24,
        "description": "Manager",
        "isEditMode": false

    },
    {
        "name": "Daniyal",
        "age": 28,
        "description": "Operator",
        "isEditMode": true

    },
]
const Persons = (props) => {

    return (
        <div style={{ background: 'lightgray' ,padding:'1em',margin:'1em'}}>
          
            {
                PersonData.map(person =>
                    <Person person={person} />)
            }
        </div>
    )
}

export default Persons;
