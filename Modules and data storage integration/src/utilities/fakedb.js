// use local storage to manage cart data
// Store multiple data in an Object with local storage

const addToDatabase = id => {
    let shoppingCart = {};

    // get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// remove data from local storage
const removeFromDatabase = id => {
    // delete single item from local storage -------
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }

    // delete all item from local storage --------
    // localStorage.removeItem('shopping-cart');
}

export {addToDatabase, removeFromDatabase};

// use local storage to manage cart data
/**
const addToDatabase = id => {
    const quantity = localStorage.getItem(id);
    if(quantity) {
        // console.log('already exist');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity);
    } else {
        // console.log('new item');
        localStorage.setItem(id, 1);
    }
}
*/