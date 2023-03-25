import React from 'react';
import { divide, subtraction } from '../../utilities/calculate';

const Shoes = () => {
    const first = 100;
    const sec = 5;
    const result = divide(first, sec);
    const subtract = subtraction(first, sec);
    return (
        <div>
            <h3>Hii, This is Shoes Components</h3>
            <p>Shoes Result: {result} and {subtract}</p>
        </div>
    );
};

export default Shoes;