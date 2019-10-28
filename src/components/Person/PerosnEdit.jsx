import React from 'react';
import PerosnInfo from './PerosnInfo';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import './personEdit.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PerosnEdit = (props) => {
    return (
        <Card.Body className="cardBody">
            <Card.Title>{props.person.name},{props.person.age}</Card.Title>
            <Card.Text>
                <input value={props.person.name} />
                <input type="number" value={props.person.age} />
                <textarea value={props.person.description}></textarea>
            </Card.Text>
            <ButtonGroup aria-label="Basic example">
                <Button variant="light"><FontAwesomeIcon className="text-primary" icon={faCheck} /></Button>
                <Button variant="light"><FontAwesomeIcon className="text-danger" icon={faTimes} /></Button>
            </ButtonGroup>
        </Card.Body>
    );
}

export default PerosnEdit;
// PerosnEdit.propTypes = {
//     person: PropType.object
// }