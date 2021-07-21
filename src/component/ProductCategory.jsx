import React, { useEffect, useState } from "react";
import { getCategories } from "../network/getCategories";
import { ProductItem } from "./ProductItem";
import styles from "../styles/ProductCategory.module.css";

export const ProductCategory = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getCategories(props.match.params);
            setData(res);
        })();
    }, []); //WHY this happend?

    if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={styles.productsListWrap}>
               
                {data.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        category={product.category}
                        brand={product.brand}
                        name={product.name}
                        price={product.price}
                        species={product.for}
                    />
                ))}
            </div>
        );
    }
};

// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {id: 0, category: "food", brand: "Whiskas", name: "For Kittens", for: "cats", …}
// 1: {id: 1, category: "food", brand: "Whiskas", name: "For Adults", for: "cats", …}
// 2: {id: 2, category: "food", brand: "Friskies", name: "For Kittens", for: "cats", …}
// 3: {id: 3, category: "food", brand: "Friskies", name: "For Adults", for: "cats", …}
// 4: {id: 4, category: "food", brand: "Special", name: "Super Special", for: "cats", …}
// 5: {id: 5, category: "food", brand: "Pedigree", name: "For Pupees", for: "dogs", …}
// 6: {id: 6, category: "food", brand: "Pedigree", name: "For Adults", for: "dogs", …}
// 7: {id: 7, category: "food", brand: "Pedigree", name: "Can", for: "dogs", …}
