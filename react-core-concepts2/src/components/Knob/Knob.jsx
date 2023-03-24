import React from 'react';

const Knob = (props) => {
    return (
        <div style={{ border: '2px solid salmon', margin: '11px', padding: '15px' }}>
            <h3>this is Knob Components</h3>
            <p>Your steps count: {props.steps}</p>
        </div>
    );
};

export default Knob;