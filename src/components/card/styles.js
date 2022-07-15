import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 300px 300px 300px;
    width: 100%;
    padding: 2rem 1.5rem;
`

export const CardContent = styled.button`
    width: 17rem;
    height: 21.25rem;
    margin: .5rem 1rem;
    background: var(--white);
    box-shadow: 2px 2px 10px grey;
    border-radius: 40px;
`