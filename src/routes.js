import React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "./pages/login";
import { Home } from './pages/home/index';
import { Dashboard } from "./pages/control-panel/dashboard/index";
import { Sales } from "./pages/control-panel/sale";

export function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/sales" element={<Sales />} />
        </Routes>
    )
}