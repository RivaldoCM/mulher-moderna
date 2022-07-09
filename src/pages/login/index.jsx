import { useState } from "react";

import { api } from "../../services/api"

import { Button, IconButton, Input, InputLabel, InputAdornment, FormControl, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Container } from "./styles";

import logo from "../../assets/images/logo.svg";

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    
    //interrompendo a progressão do button para capturar os dados
    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/login", { username:email, password }  ).then((response) => {
            localStorage.setItem("token", response.data.token)
            window.location.href = "/"
            }
        );
        //enviando os dados e recebendo o token caso o user esteja correto
    }
    
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
                <div className="content">
                    
                    <form className="flex" onSubmit={handleSubmit}>
                        <TextField 
                            id="standard-basic" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} //alocando o valor inserido no input para o state
                            label="Usuário ou CPF" 
                            variant="standard" 
                            style={{ width: '13.75rem' }}>
                        </TextField>
                        <FormControl sx={{ width: '13.75rem', height: '3rem', margin: '.5rem 0', focus: 'red'}} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                onInput={(e) => setPassword(e.target.value)} //alocando o valor inserido no input para o state
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
                        <Button type="submit" variant="contained" style={{ width: '9rem', height: '2.5rem', backgroundColor: '#3C3163' }}>Entrar</Button>
                        <div className="content__item"><a href="">Não consigo entrar</a></div>
                        <div className="content__item flex"><p>Não possui uma conta?</p><a href="">Registre-se</a></div>
                    </form>
                </div>
            </div>
        </Container>
    )
}