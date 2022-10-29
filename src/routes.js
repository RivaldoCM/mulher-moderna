import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from './pages/home/index'
import { Login } from "./pages/login";

import { AuthProvider, AuthContext } from "./contexts/auth";

export function MainRoutes(){
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

        if(!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    }; 
    
    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={ <Private><Home /></Private> } />    
            </Routes>
        </AuthProvider>
    )
}