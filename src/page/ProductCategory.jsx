import React, { useEffect, useState } from "react";
import { getCategoryItems } from "../network/getCategoryItems";
import { ProductItem } from "../component/ProductItem";

export const ProductCategory = (props) => {
    const { category } = props.match.params;
    const [data, setData] = useState(null);

    useEffect(() => {
        getCategoryItems(category).then((result) => {
            setData(result);
        });
    }, [category]);

    if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {data.map((product) => (
                    <ProductItem
                        key={product.id}
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
