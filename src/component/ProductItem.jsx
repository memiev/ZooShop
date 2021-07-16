import React from "react";
import styles from "../styles/ProductItem.module.css";
import { Link } from "react-router-dom";

export const ProductItem = ({ brand, name, price, species,category, id }) => {
    //shows list of items IN chosen category.
    return (
        <div className={styles.itemBox}>
            <Link to={`/products/${category}/${id}`}>
                <h2>{brand}</h2>
                <p>Name: {name}</p>
                <p>Species: {species}</p>
                <p>Price: {price}$</p>
            </Link>
        </div>
    );
};

//SERVER:
// id: 0,
// category: "food",
// brand: "Whiskas",
// name: "For Kittens",
// for: "cats",
// price: 1500
