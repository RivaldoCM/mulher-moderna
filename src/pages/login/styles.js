import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    height: 100vh;
    background: var(--white);

    .login__logo{
        margin: 2rem 0;
    }

    .content{
        
        form{
            flex-direction: column;
        }

        .content__item{
            margin-top: 1rem;

            a{
                color: var(--gray);

                :hover{ 
                    text-decoration: underline;
                }
                
            }

            :last-of-type{
                position: absolute;
                bottom: 0;
                margin-bottom: 3rem;

                a{
                    color: var(--purple);
                }
            }
        }
    }

`