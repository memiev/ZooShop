import React from "react";
import { useState, useEffect } from "react";

import { getProducts } from "../network/getPrducts";
import { CategoryItem } from "../component/CategoryItem";
import load from "../assets/load.gif";

export const Category = () => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(false);

    // useEffect(()=> {
    //     getProducts().then((res) => {
    //         setData(res);
    //     });

    // }, [])

    useEffect(() => {
        (async () => {
            const res = await getProducts().catch((err) => {
                setErr(true);
            });
            setData(res);
        })();
    }, []); // TEST DECISION

    if (err) {
        return <div>Cannot read data, try again leter.</div>;
    } else if (!data) {
        return (
            <div>
                <h2>Loading...</h2>
                <img src={load} alt="loading" />
            </div>
        );
    } else {
        return (
            <div className='categories'>
                {data.map((product) => (
                    <CategoryItem key={product.id} title={product.title} className='test' />
                ))}
            </div>
        );
    }
};
