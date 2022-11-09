import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from './pages/home/index'
import { Login } from "./pages/login";

import { AuthProvider, AuthContext } from "./contexts/auth";


export function MainRoutes(){
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="loading">carregando</div>
        }

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