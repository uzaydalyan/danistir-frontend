import axios from "axios";

const baseUrl = "https://danistir-lake.vercel.app/";

export const registerUser = (email, password) => {

    return axios.post(baseUrl + "register", {
        email : email,
        password : password
    })
}

export const loginUser = (email, password) => {

    return axios.post(baseUrl + "login", {
        email : email,
        password : password
    })
}