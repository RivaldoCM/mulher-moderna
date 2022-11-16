import logo from "../../assets/images/logo.svg"
import { Container } from "./styles"

import { NavLink } from "react-router-dom"; //Salvou demais

import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';

export function Menu(){
    let activeClassName = "active";

    return(
        <Container>
            <div className="menu__item flex">
                <img src={logo} alt="" />
            </div>
            <nav>
                <Paper sx={{ width: "100%", boxShadow:"none" }}>
                    <MenuList>
                        <NavLink to="/dashboard" 
                            className={({ isActive }) => isActive ? 
                            activeClassName : undefined }
                        >
                            <MenuItem >
                                <ListItemIcon>
                                    <DashboardIcon fontSize="medium"/>
                                </ListItemIcon>
                                <ListItemText>Dashboard</ListItemText>
                            </MenuItem>
                        </NavLink>
                        <NavLink to="/products" 
                            className={({ isActive }) => 
                            isActive ? activeClassName : undefined }
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <ShoppingBagOutlinedIcon fontSize="medium"/>
                                </ListItemIcon>
                                <ListItemText>Meus produtos</ListItemText>
                            </MenuItem>
                        </NavLink>
                        <NavLink to="/sales" 
                            className={({ isActive }) => 
                            isActive ? activeClassName : undefined }
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <DiscountOutlinedIcon fontSize="medium"/>
                                </ListItemIcon>
                                <ListItemText>Promoções</ListItemText>
                            </MenuItem>
                        </NavLink>
                        <NavLink to="/store" 
                            className={({ isActive }) => 
                            isActive ? activeClassName : undefined }
                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <StoreMallDirectoryOutlinedIcon fontSize="medium" />
                                </ListItemIcon>
                                <ListItemText>Minha Loja</ListItemText>
                            </MenuItem>
                        </NavLink>
                        <NavLink to="disabled" 
                            className={({ isActive }) => 
                            isActive ? activeClassName : undefined }
                        >
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Meu Catálogo [Em Breve]</ListItemText>
                            </MenuItem>
                        </NavLink>
                    </MenuList>
                </Paper>
            </nav>
            <div className="menu__item flex">
                <div className="menu__email">email</div>
                <button>Sair</button>
            </div>
        </Container>
    )
}