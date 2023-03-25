import React from 'react';
import { addToDatabase, removeFromDatabase } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        addToDatabase(id);
    }

    const removeFromCart = id => {
        removeFromDatabase(id);
    }

    // its not a right way.
    const addToCartWithParam = () => addToCart(id);

    // if we want to pass a event handler with parameter then we should wrap it 
    //  with a arrow function.

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Price: ${price}</p>
            <p><small>Product id: {id}</small></p>

            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}

            <button onClick={()=>addToCart(id)}>Add to Cart</button>
            <button 
                onClick={()=>removeFromCart(id)}
                style={{marginLeft:'9px'}}
            >Remove from Cart</button>
        </div>
    );
};

export default Cosmetic;