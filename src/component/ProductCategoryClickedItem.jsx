import React, { useEffect, useState } from "react";
import { getCategories } from "../network/getCategories";
import style from "../styles/ProductCategoryClickedItem.module.css";

export const ProductCategoryClickedItem = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        getCategories(props.match.params).then((res) => {
            // brand: "Pedigree"
            // category: "brushes"
            // for: "dogs"
            // id: 1
            // name: "For Adults"
            // price: 1200
            setData(res);
        });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={style.SingleItemdisplayedWrap}>
                <div className={style.SingleItemdisplayed}>
                    <h2>Category: {data.category}</h2>
                    <h2>Brand: {data.brand}</h2>
                    <h2>Species: {data.for}</h2>
                    <h2>Name: {data.name}</h2>
                    <h2>Price: {data.price}$</h2>
                    <h2>ID: {data.id + 513}</h2>
                </div>
            </div>
        );
    }
};
