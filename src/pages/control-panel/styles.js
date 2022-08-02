import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
`

export const Main = styled.main`
    width: calc(100vw - 23.5rem); //Retirando o tamanho do menu para nao ter scroll
    height: 100vh;
    margin: 0 3rem;
    overflow: auto;
`