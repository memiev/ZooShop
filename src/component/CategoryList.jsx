import React from 'react';
import { Link }from 'react-router-dom'

import style from '../styles/CategoryItem.module.css'

export const CategoryList = ({title}) =>{ //shows all categories fetched from API
    return(
        <div>
            <Link to={`/products/${title}`}>
            <h2 className={style.categoryItemList}>{title}</h2> 
            </Link>
        </div>
    );
}