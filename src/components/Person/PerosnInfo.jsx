import React from 'react';
import PropType from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Perosn from './Perosn';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
const PerosnInfo = (props) => {

    return (
        <Card.Body>
            <Card.Title>{props.person.name},{props.person.age}</Card.Title>
            <Card.Text>
                {props.person.description}
            </Card.Text>
            <ButtonGroup aria-label="Basic example">
                <Button variant="light"><FontAwesomeIcon className="text-primary" icon={faEdit} 
                onClick={props.enableEditButton} 
                /></Button>
                <Button variant="light"><FontAwesomeIcon className="text-danger" icon={faTrash} /></Button>
            </ButtonGroup>
        </Card.Body>

    );
}

export default PerosnInfo;
PerosnInfo.propTypes = {
    person: PropType.object,
    enableEditButton:PropType.func
    // enableEditButton.
}