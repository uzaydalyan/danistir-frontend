import axios from "axios";

const baseUrl = "https://danistir.pythonanywhere.com/";

//{headers: {"Authorization" : `Bearer ${token}`}},

export const registerUser = (email, password) => {

    return axios.post(baseUrl + "register", {
        email : email,
        password : password
    })
}

export const loginUser = (email, password,) => {

    return axios.post(baseUrl + "login", {
        email : email,
        password : password
    })
}

export const setConsultantWorkTimes = (time, token) => {

    const headers = {"Authorization" : `Bearer ${token}`,
                     "Content-Type": "application/json"
    }

    return axios.post(baseUrl + "consultantworktime",{time : time}, {headers: headers})
}