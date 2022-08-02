import { Menu } from "../../../components/menu";

import { Container, Main } from "../styles";
import { Stats, Title } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Menu />
            <Main>
               <Title>
                    <h2>Bem vindo(a), Seila Quem!</h2>
                    <p>Confira aqui suas estatisticas</p>
               </Title>
               <Stats>
                
               </Stats>
            </Main>
        </Container>
    )
}