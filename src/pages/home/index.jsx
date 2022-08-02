import { useEffect } from "react";

export function Home(){
    useEffect(() => {
        if (!localStorage.getItem("token")){
            window.location.href = "/login"
        }
    }, []);

    return(
        <></>
    )
}