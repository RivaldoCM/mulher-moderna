import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from './pages/home/index'
import { Login } from "./pages/login";

export function MainRoutes(){
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}