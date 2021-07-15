import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import logoPet from "../assets/logoPet.png";

export const Nav = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    console.log(darkMode); //Line 7:10:  'darkMode' is assigned a value but never used  no-unused-vars

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
                    Dark Mode{" "}
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
