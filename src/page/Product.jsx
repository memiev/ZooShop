import React from 'react';
import { Link }from 'react-router-dom'

export const Product = ({id, title}) =>{
    return(
        <div>
            <Link to={`/products/${title}`}>
            <strong>{title}</strong> 

            </Link>
        </div>
    );
}