import React from 'react'
import { useState, useEffect } from 'react';

import { getProducts } from '../network/getPrducts';
import { Product } from './Product';



export const Products = () =>{

    const [data, setData] = useState(null);

    useEffect(()=> {
        getProducts().then((res) => {
            setData(res);
        });
            
    }, [])

    if(!data){
        return(
            <div>Loading...</div>
            );
    }else{
        return(
            
        <div> 
            {
                data.map ( (product) => (
                    <Product key={product.id} title={product.title} />
                ))
            }
        </div>
    );
}}

    