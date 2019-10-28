import React from 'react';
import PerosnInfo from './PerosnInfo';
import PerosnEdit from './PerosnEdit';
import PropType from 'prop-types';
import './person.css';
import { Card, Button } from 'react-bootstrap';

const Perosn = (props) => {
   
    return (
       


            <Card className="card"  >
                {props.person.isEditMode ?
                    <PerosnEdit person={props.person} /> :
                    <PerosnInfo person={props.person} 
                    enableEditButton={props.enabledEditButton}
                    />}
            </Card>

        
    )
}

export default Perosn;
Perosn.propTypes = {
    person: PropType.object,
     enabledEditButton:PropType.func
}