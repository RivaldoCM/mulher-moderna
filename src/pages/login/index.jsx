import { useState } from "react";

import { Button, IconButton, Input, InputLabel, InputAdornment, FormControl, TextField } from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Container } from "./styles";

import logo from "../../assets/images/logo.svg"

export function Login(){

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <Container className="flex">
            <div className="login">
                <div className="login__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="content flex">
                    <TextField id="standard-basic" label="Usuário ou CPF" variant="standard" style={{ width: '13.75rem' }}/>
                    <FormControl sx={{ width: '13.75rem', height: '3rem', margin: '.5rem 0' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button variant="contained" style={{ width: '9rem', height: '2.5rem', backgroundColor: '#3C3163' }} >Entrar</Button>
                    <div className="content__item"></div>
                </div>
            </div>
        </Container>
    )
}