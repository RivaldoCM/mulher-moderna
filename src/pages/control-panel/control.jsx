import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Menu } from "../../components/menu/index";

import { Container } from "./styles"

export function Control(){
    useEffect(() => {
        if (!localStorage.getItem("token")){
            window.location.href = "/login"
        }
    }, []);

    return(
        <Container className="flex">
            <Menu />
            <main>
                <Link to='dashboard'>oioi</Link>
            </main>
        </Container>
    )
}