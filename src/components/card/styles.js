import styled from "styled-components";


export const CardTitle = styled.div`

    width: 100%;
    padding-top: 2rem;

    h3{
        color: #4B4B4B;
    }
`

/*
    CardContainer configurado especificamente para englobar os Cards
    Em display GRID
*/
export const CardContainer = styled.div`
    display: grid;
    justify-content: ${(props) => props.justify};
    grid-template-columns: 300px 300px 300px;
    width: 100%;
    padding: ${(props) => props.padding}; //padrão 2rem 1.5rem
`

export const CardContent = styled.button`
    width: 17rem;
    height: 21.25rem;
    margin: .5rem 1rem;
    background: var(--white);
    border-radius: 40px;

    .card__item:first-child{
        width: 100%;
        height: 70%;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .card__item:last-child{
        flex-direction: column;
        width: 100%;
        height: 30%;

        .card__title{
            font-size: 1.25rem;
            font-weight: 700;
        }

        .card__price p:first-child{
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--pink);
        }

        .card__price p:last-child{
            font-size: .6rem;
            font-weight: 700;
        }
    }
`