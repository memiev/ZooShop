import React from 'react';
import { Link }from 'react-router-dom'

export const CategoryItem = ({id, title}) =>{ //shows all categories fetched from API
    return(
        <div>
            <Link to={`/products/${title}`}>
            <strong>{title}</strong> 
            </Link>
        </div>
    );
}