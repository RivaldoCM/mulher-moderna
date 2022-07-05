import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (email, pass) => {
        console.log("login", user, pass);
        setUser({ id: "123", email })
    };
    const logout = () => {};

    return(
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}
