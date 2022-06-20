import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from './pages/home/index'

export function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}