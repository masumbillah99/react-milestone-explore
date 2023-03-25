import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] =  useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setCosmetics(data))
    }, []);

    return (
        <div>
            <h3>Hey, this is Cosmetics Components</h3>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;