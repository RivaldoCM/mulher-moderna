import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000
})

export const createSession = async ( email, password ) => {
    return api.post( "/login", { email, password } )
}