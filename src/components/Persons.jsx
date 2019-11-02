import Person from './Person/Perosn'
import './persons.css';
import React, { Component } from 'react';

export class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            PersonData: [
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
        }
    }

    render() {


        let deletePerson = (p) => {
            this.setState({
                PersonData: this.state.PersonData.filter(person => person.name !== p.name)
            })
        }

        let tooggleEditMode = (p, newValue) => {
            this.setState({

                PersonData: this.state.PersonData.map(pInner => {
                    if (pInner.name == p.name) {
                        pInner.isEditMode = newValue;
                    }
                    return pInner;
                })

            })
        }

        return (
            <div className="persons_list" >

                {
                    this.state.PersonData.map(person =>
                        <Person person={person} enabledEditButton={
                            () => tooggleEditMode(person, true)}

                            disableEdit={
                                () => tooggleEditMode(person, false)
                            }

                            ClickDelete={
                                () => deletePerson(person)
                            }
                        />)


                }
            </div>
        )
    }
}

export default Persons;


