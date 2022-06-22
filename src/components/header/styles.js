import styled from "styled-components";

export const Container = styled.header`
    flex-direction: column;
    height: 424px;
    background: var(--white);

    .logo{
        width: 100%;
        height: 100%;
        max-height: 334px;

        img{
            //responsive
            width: 100%;
            max-width: 314px;
            height: 100%;
            max-height: 120px;
            margin: 0.25rem;
            //responsive
        }
    }
`

export const Navigation = styled.nav`
    
    width: 100%;
    height: 90px;

    .center{
        position: relative;

        ul{
        
            li{
                margin: 0 2rem;
                padding: 0.25rem 0;
                border-top: 1.72px solid black;

                :hover{
                    filter: opacity(50%);
                }
            }
        }

        .header-icon{
            position: absolute;
            right: 0;
            margin-right: 2rem;

            :hover{
                filter: opacity(75%);
            }
        }
    }
`