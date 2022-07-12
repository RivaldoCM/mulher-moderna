import styled from "styled-components";

export const Container = styled.aside`

    position: relative;
    width: 23.5rem;
    height: 100vh;
    background: var(--white);

    .menu__item{
        flex-direction: column;
        width: 100%;

        :first-child{
            padding: 2rem;

            img{
                width: 10.3rem;
            }
        }

        :last-child{
            position: absolute;
            bottom: 5rem;
            align-self: center;

            .menu__email{
                margin: 2rem;
                color: #4B4B4B;
            }

            button{
                color: var(--pink);
                font-size: 1rem;
            }
        }
    }

    nav {

        li{
            height: 62px !important;
            padding-left: 1.5rem;

            :hover, :focus{
                background: linear-gradient(to left, rgba(229, 63, 113, 1), 10%, #fff 30%);
                
                span, svg{
                    color: var(--pink);

                }
            }

            :last-child{
                cursor: default;

                :hover{
                    background: none;
                    
                    span{
                        color: #4B4B4B;
                    }
                }
            }

            span{
                color: #4B4B4B;
                text-align: center;
                font-weight: 500;
            }
        }
    }
`