import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/login";
import { Home } from './pages/home/index';
import { Dashboard } from "./pages/control-panel/dashboard/index";
import { Products } from "./pages/control-panel/products/index";

export function MainRoutes(){
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}