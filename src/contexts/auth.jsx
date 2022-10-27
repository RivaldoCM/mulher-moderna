import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [ user, setUser ] = useState(null);

    const login = ( email, password ) => {
        if(password === '123'){
            setUser({ id: "123", email });
            navigate("/");
        }

        console.log("login auth", { email, password });

    };

    const logout = () => { 
        setUser(null);
        navigate("/login")
     };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}