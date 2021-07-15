import React from 'react';

export const ProductItem = ({brand, name, price, species}) =>{ //shows list of items IN chosen category.
    return(
        <div>
            <h2>{brand}</h2>
            <p>Name: {name}</p>
            <p>Species: {species}</p>
            <p>Price: {price}$</p>
        </div>
    );
}

//SERVER:
// id: 0,
// category: "food",
// brand: "Whiskas",
// name: "For Kittens",
// for: "cats",
// price: 1500