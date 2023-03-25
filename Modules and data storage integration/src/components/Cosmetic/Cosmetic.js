import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;
    const addToCart = (id) => {
        console.log('add to cart', id);
    }

    // its not a right way.
    const addToCartWithParam = () => addToCart(id);

    // if we want to pass a event handler with parameter then we should wrap it 
    //  with a arrow function.

    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>
            <p>Price: ${price}</p>
            <p><small>Product id: {id}</small></p>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;