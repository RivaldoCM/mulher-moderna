import { Container, Navigation } from "./styles"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import logo from "../../assets/images/logo.svg"

export function Header(){
    return(
        <Container className="flex">
            <div className="logo flex">
                <img src={logo} alt="" />
            </div>
            <Navigation className="flex">
                <div className="center flex">
                    <ul className="flex">
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Promoções</a>
                        </li>
                        <li>
                            <a href="#">Sobre</a>
                        </li>
                    </ul>
                    <div className="header-icon">
                        <AccountCircleOutlinedIcon 
                            style={{ fontSize: '2rem',
                            color: '#3C3163', 
                            cursor: 'pointer'}}
                        />
                    </div>
                </div>
            </Navigation>
        </Container>
    )
}