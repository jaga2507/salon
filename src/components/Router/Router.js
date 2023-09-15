import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../login/LoginTab";
import Home from "../Home";

function Routers(props) {

    return (
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}


export default Routers;
