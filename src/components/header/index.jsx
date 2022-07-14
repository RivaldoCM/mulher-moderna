import { Container } from "./styles"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import logo from "../../assets/images/logo.svg"

export function Header(){
    return(
        <Container className="flex">
            <div className="logo flex">
                <img src={logo} alt="" />
            </div>
            <div className="search-box flex">
                <input type="search" placeholder="O que ce quer?"/> 
                <button>
                    <SearchOutlinedIcon
                        style={{ fontSize: '2rem' }}
                    />
                </button>
            </div>
            <div className="header-icon flex">
                <AccountCircleOutlinedIcon 
                    style={{ fontSize: '3.87rem',
                    color: 'var(--pink)', 
                    cursor: 'pointer'}}
                />
            </div>
        </Container>
    )
}