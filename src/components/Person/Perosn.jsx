import React from 'react';
import PerosnInfo from './PerosnInfo';
import PerosnEdit from './PerosnEdit';
import PropType from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const Perosn = (props) => {


    return (
        <>


            <Card style={{ width: '18rem' ,margin:'1em',textAlign:'center'}}  >
                {props.person.isEditMode ?
                    <PerosnEdit person={props.person} /> : <PerosnInfo person={props.person} />}
            </Card>

        </>
    )
}

export default Perosn;
Perosn.propTypes = {
    person: PropType.object
}