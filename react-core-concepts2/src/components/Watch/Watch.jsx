import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
    }

    const resetSteps = () => {
        const newSteps = 0;
        setSteps(newSteps);
    }

    return (
        <div style={{ border: '2px solid red', margin: '11px', padding: '15px' }}>
            <h2>Hey this is Rolex watch</h2>
            <p>Your steps count: {steps}</p>
            <button
                onClick={increaseSteps}
                style={{ color: 'white', }}
            >Increase Number</button>
            <button
                onClick={resetSteps}
                style={{ color: 'white', marginLeft: '11px' }}
            >Reset Number</button>
            <Dial steps={steps}></Dial>
        </div >
    );
};

export default Watch;