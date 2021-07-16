import React from "react";
import { useState, useEffect } from "react";

import { getCategories } from "../network/getCategories";
import { CategoryList } from "../component/CategoryList";
import load from "../assets/load.gif";

import Modal from "../component/Modal/modal";

export const Category = () => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        Open Modal
                    </button>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => {
                            setIsModalOpen(false);
                        }}
                        title={"Some Title"}
                    >
                        <p>
                            <span>Svetlio</span> <br />
                            <span>Denis</span> <br />
                            <span>Valeri</span> <br />
                            <span>Andrey</span> <br />
                            <span>Joro</span> <br />
                        </p>
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
