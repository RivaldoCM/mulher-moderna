import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";

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