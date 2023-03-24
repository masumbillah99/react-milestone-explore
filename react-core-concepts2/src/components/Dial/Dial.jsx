import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid purple', margin: '11px', marginTop: '19px', padding: '15px' }}>
            <h3>This is Dial Components</h3>
            <p>Your steps count: {props.steps}</p>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;