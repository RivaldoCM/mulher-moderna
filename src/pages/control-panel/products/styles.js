import styled from "styled-components";

export const Box = styled.div`
    flex-direction: row;
    width: 100%;
    height: 10.625rem;
    background: var(--pink);

    .box__item{
        width: 50%;
        height: 100%;
        padding: 0 3rem;

        :first-child{
            flex-direction: column;
            align-items: flex-start;

            h2, p{
                font-weight: 400;
                color: var(--white);
            }
        }

        :last-child{
            justify-content: flex-end;
        }
    }
`

export const ListProducts = styled.section`
    width: 100%;
    padding: 2rem;

    th{ background: transparent; }

    td{
        border-bottom: none !important;

        :nth-child(5){
            svg{
                color: red !important;
                cursor: pointer;
            }
        }
        :nth-child(6){
            svg{
                cursor: pointer;
            }
        }
    }
`