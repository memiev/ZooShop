import React from "react";
import styles from "../styles/ProductItem.module.css";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/action-creators";
import { useDispatch } from "react-redux";

export const ProductItem = ({ brand, name, price, species, category, id }) => {
    const dispatch = useDispatch();
    const handleOnAddClick = () => {
        dispatch(addToCart({ brand, name, price, id }));
    };

    const handleOnRemoveClick = () => {
        dispatch(removeFromCart({ brand, name, price, id }));
    };
    //shows list of items IN chosen category.
    return (
        <div className={styles.itemBox}>
            <Link to={`/products/${category}/${id}`}>
                <h2>{brand}</h2>
                <p>Name: {name}</p>
                <p>Species: {species}</p>
                <p>Price: {price}$</p>
            </Link>
            <button onClick={handleOnAddClick}>Add to cart</button>
            <button onClick={handleOnRemoveClick}>Remove from cart</button>
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
