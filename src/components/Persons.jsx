import React from 'react';
import Person from './Person/Perosn'
import './persons.css';
const PersonData = [
    {
        "name": "Ali",
        "age": 13,
        "description": "Assistant",
        "isEditMode": false
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
        "isEditMode": false

    },
]
const Persons = (props) => {
    let enableEdit =   ()=> alert('hie');

    return (
        <div className="persons_list" >

            {
                PersonData.map(person =>
                    <Person person={person} enabledEditButton={enableEdit} />)
            }
        </div>
    )
}

export default Persons;
