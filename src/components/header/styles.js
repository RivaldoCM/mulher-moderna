import styled from "styled-components";

export const Container = styled.header`
    flex-direction: row;
    height: 12rem;
    background: var(--white);

    .logo{
        width: 25%;
        height: 100%;

        img{
            width: 11.75rem;
            height: 100%;
        }
    }

    .search-box{
        width: 50%;
        height: 100%;

        input{
            width: 37.5rem;
            height: 2.8rem;
            padding: 0 .5rem;
            border-bottom: 2px solid black;
        }

        button{
            height: 2.8rem;
            background: none;
            border-bottom: 2px solid black;
        }
    }

    .header-icon{
        width: 25%;
        margin-right: 2rem;

        :hover{
            filter: opacity(75%);
        }
    }
`