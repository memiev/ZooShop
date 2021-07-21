import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { bindActionCreators } from "redux";

import { Nav } from "./component/Nav";
import { Routes } from "./utility/Routes";
import { actionCreators } from "./redux";
import { useDispatch } from "react-redux";

//KISS = Keep It Simple Stuped

function App() {
    const dispatch = useDispatch();
    bindActionCreators(actionCreators, dispatch);
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
