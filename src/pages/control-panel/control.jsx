import { useEffect } from "react";

import { Menu } from "../../components/menu/index";
import { Dashboard } from "./dashboard";

import { Container, Main } from "./styles";

export function Control(){
    useEffect(() => {
        if (!localStorage.getItem("token")){
            window.location.href = "/login"
        }
    }, []);

    return(
        <Container className="flex">
            <Menu />
            <Main>
                
            </Main>
        </Container>
    )
}