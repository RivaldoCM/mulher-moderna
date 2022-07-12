import logo from "../../assets/images/logo.svg"
import { Container } from "./styles"

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

    return(
        <Container>
            <div className="menu__item flex">
                <img src={logo} alt="" />
            </div>
            <nav>
                <Paper sx={{ width: "100%", boxShadow:"none" }}>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <DashboardIcon fontSize="medium"/>
                            </ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <ShoppingBagOutlinedIcon fontSize="medium"/>
                            </ListItemIcon>
                            <ListItemText>Meus produtos</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <DiscountOutlinedIcon fontSize="medium"/>
                            </ListItemIcon>
                            <ListItemText>Promoções</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <StoreMallDirectoryOutlinedIcon fontSize="medium" />
                            </ListItemIcon>
                            <ListItemText>Minha Loja</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText>Meu Catálogo [Em Breve]</ListItemText>
                        </MenuItem>
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