import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import logoPet from "../assets/logoPet.png";
import { useSelector } from "react-redux";

export const Nav = () => {
    const cart = useSelector((state) => state.cart);

    const [darkMode, setDarkMode] = useDarkMode();
    console.log("Dark Mode is", darkMode ? "On" : "Off");

    const handleOnChange = ({ target: { checked } }) => {
        setDarkMode(checked);
    };

    // return (
    //     <ul className="nav">
    //         <li >
    //             <img className="logoPet" src={logoPet} alt="logo" />
    //         </li>
    //         <li>
    //             Dark Mode <input type="checkbox" onChange={handleOnChange} />
    //         </li>
    //         <li>
    //             <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //             <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //             <Link to="/products">Category</Link>
    //         </li>
    //         {/* <li><Link to="/products/cat/wiskas/?order=asc">Sort</Link></li> */}
    //     </ul>
    // );

    return (
        <div className="menu">
            <div className="logoPet">
                <img className="logoPet" src={logoPet} alt="logo" />
            </div>

            <ul className="nav">
                <li>
                    <h2>Items in cart: {cart.length}</h2>
                </li>
                <li>
                    Dark Mode
                    <input type="checkbox" onChange={handleOnChange} />
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/products">Category</Link>
                </li>
                {/* <li><Link to="/products/cat/wiskas/?order=asc">Sort</Link></li> */}
            </ul>
        </div>
    );
};
