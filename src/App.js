import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Nav } from "./component/Nav";
import { Routes } from "./utility/Routes";

//KISS = Keep It Simple Stuped

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Routes />
            </Router>
        </div>
    );
}

export default App;
