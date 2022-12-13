import axios from "axios";

const baseUrl = "https://danistir.pythonanywhere.com/";

//{headers: {"Authorization" : `Bearer ${token}`}},

const configWithToken = (token) => {

    const headers = {"Authorization" : `Bearer ${token}`,
                     "Content-Type": "application/json"
    }

    return {headers: headers, validateStatus: valStatus}
}

const configWithoutToken = () => {

    return {validateStatus: valStatus}
}

function valStatus (status) {
    return status >= 200;
}

export const registerUser = (values) => {

    return axios.post(baseUrl + "register", {
        email : values.email,
        password : values.password,
        name: values.name,
        surname: values.surname,
        isConsultant: values.isConsultant
    })
}

export const loginUser = (email, password,) => {

    return axios.post(baseUrl + "login", {
        email : email,
        password : password
    })
}

export const setConsultantWorkTimes = (time, token) => {

    return axios.post(baseUrl + "consultantworktime",{time : time}, configWithToken(token))
}

export const getConsultantWorkTimes = (token) => {

    return axios.get(baseUrl + "consultantworktime", configWithToken(token))
}

export const getAccountInfo = (token) => {

    return axios.get(baseUrl + "profile", configWithToken(token))
}

export const getconsultantSubareas = () => {

    return axios.get(baseUrl + "consultantsubareas", configWithoutToken)
}

export const setNewPassword = (values, token) => {

    return axios.post(baseUrl + "password",{
        old_password: values.current,
        new_password: values.new
    }, configWithToken(token))
}

export const getSearchResults = (text, token) => {

    return axios.get(baseUrl + "search", {text: text}, configWithoutToken)
}

export const getServiceSettings = (token) => {

    return axios.get(baseUrl + "consultantservicesettings", configWithToken(token))
}

export const setServiceSettings = (values, token) => {

    return axios.post(baseUrl + "consultantservicesettings", {
        subAreas: values.subAreas, 
        time: values.time
    },configWithToken(token))
}