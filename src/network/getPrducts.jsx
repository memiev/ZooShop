import React from 'react';

const serverUrl = 'http://localhost:7878';
const getProductsUrl = '/products';

export const getProducts = () =>{
    return (
        fetch(`${serverUrl}${getProductsUrl}`)
        .then((res) => {
            return res.json()
        })
    );
}