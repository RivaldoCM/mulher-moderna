import { useEffect } from "react";
import { Header } from "../../components/header";

export function Home(){
    useEffect(() => {
        if (!localStorage.getItem("token")){
            window.location.href = "/login"
        }
    }, []);

    return(
        <>
            <Header />
        </>
    )
}