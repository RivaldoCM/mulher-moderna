import { Menu } from "../../../components/menu";
import { Card } from "../../../components/card";


import { Container, Main } from "../styles";
import { CardTitle, Stats, Title } from "./styles";
import { CardContainer } from "../../../components/card/styles";

export function Dashboard(){
    return(
        <Container>
            <Menu />
            <Main>
            </Main>
        </Container>
    )
}