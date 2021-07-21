import React from "react";
import { useState, useEffect } from "react";

import { getCategories } from "../network/getCategories";
import { CategoryList } from "../component/CategoryList";
import load from "../assets/load.gif";
import { useSelector } from "react-redux";
import Modal from "../component/Modal/modal";

export const Category = () => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const items = useSelector((state) => state.cart);
    // console.log(items);

    // ITEMS
    //     (5) [{…}, {…}, {…}, {…}, {…}]
    // 0: {brand: "Whiskas", name: "For Kittens", price: 1500, id: 0}
    // 1: {brand: "Whiskas", name: "For Kittens", price: 1500, id: 0}
    // 2: {brand: "Whiskas", name: "For Adults", price: 1200, id: 1}
    // 3: {brand: "Whiskas", name: "For Adults", price: 1200, id: 1}
    // 4: {brand: "Special", name: "Super Special", price: 3999, id: 4}
    // length: 5

    const getAllByCategory = () => {
        const count = {};
        items.forEach((item) => {
            if (!count[item.name]) {
                count[item.name] = 1;
            } else {
                count[item.name] += 1;
            }
        });

        for (const [key, value] of Object.entries(count)) {
            // console.log(`${key}: ${value}`);
            return(
                <p> {key} - {value} </p>
            );
          }
    };

    useEffect(() => {
        (async () => {
            const res = await getCategories().catch((err) => {
                setErr(true);
            });
            setData(res);
        })();
    }, []);

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
            <div>
                <h1>Categories</h1>
                <div className="modal">
                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                        }}
                    >
                        Open Cart
                    </button>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => {
                            setIsModalOpen(false);
                        }}
                        title={"Your Cart"}
                    >
                        {getAllByCategory()}
                    </Modal>
                </div>

                <div className="categories">
                    {data.map((product) => (
                        <CategoryList key={product.id} title={product.title} />
                    ))}
                </div>
            </div>
        );
    }
};

// data = [
//     {
//         id: 0,
//         title: "food",
//     },
//     {
//         id: 1,
//         title: "toys",
//     },
//     {
//         id: 2,
//         title: "brushes",
//     },
// ];
