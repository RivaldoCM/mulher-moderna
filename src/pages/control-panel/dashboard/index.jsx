import { Menu } from "../../../components/menu";
import { Card } from "../../../components/card";


import { Container, Main } from "../styles";
import { Stats, Title } from "./styles";
import { CardContainer, CardTitle } from "../../../components/card/styles";

export function Dashboard(){
    return(
        <Container>
            <Menu />
            <Main>
                <Title>
                    <h2>Bem vindo(a), seila quem!</h2>
                    <p>Veja aqui suas estátisticas</p>
                </Title>
                <Stats>

                </Stats>
                <section className="section__item">
                    <CardTitle>
                        <h3>O que os clientes mais procuram</h3>
                    </CardTitle>
                    <CardContainer justify="start" padding="2rem 0">
                        <Card />
                        <Card />
                        <Card />
                    </CardContainer>
                </section>
                <section className="section__item">
                    <CardTitle>
                        <h3>O que os clientes odeiam nessa porra</h3>
                    </CardTitle>
                    <CardContainer justify="start" padding="2rem 0">
                        <Card />
                        <Card />
                        <Card />
                    </CardContainer>
                </section>
                <section className="section__item">
                    <CardTitle>
                        <h3>Melhores produtos da loja</h3>
                    </CardTitle>
                    <CardContainer justify="start" padding="2rem 0">
                        <Card />
                        <Card />
                        <Card />
                    </CardContainer>
                </section>
            </Main>
        </Container>
    )
}