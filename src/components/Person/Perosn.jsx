import React from 'react';
import PerosnInfo from './PerosnInfo';
import PerosnEdit from './PerosnEdit';
import PropType from 'prop-types';

const Perosn = (props) => {
    

    return (
        <div style={{ background: 'blue', padding: '1em', margin: '1em' }}>
            Person here
            {props.isEditMode ?
                <PerosnEdit /> : <PerosnInfo />}
        </div>
    )
}

export default Perosn;
Perosn.propTypes = {
    isEditMode: PropType.bool
}