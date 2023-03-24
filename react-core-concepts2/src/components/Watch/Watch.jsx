import React, { useState } from 'react';

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
        <div>
            <h2>Hey this is Rolex watch</h2>
            <h5>Steps: {steps}</h5>
            <button
                onClick={increaseSteps}
                style={{ color: 'white', }}
            >De Dour......</button>
            <button
                onClick={resetSteps}
                style={{ color: 'white', marginLeft: '11px' }}
            >Reset</button>
        </div >
    );
};

export default Watch;