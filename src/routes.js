import React from "react";
import { Routes, Route } from "react-router-dom";

import { Control } from "./pages/control-panel/control";
import { Login } from "./pages/login";
import { Home } from './pages/home/index';
import { Dashboard } from "./pages/control-panel/dashboard/index";

export function MainRoutes(){
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/control" element={<Control />}>
                <Route path='dashboard' element={<Dashboard />} />
            </Route>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}