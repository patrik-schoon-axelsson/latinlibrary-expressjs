import Axios from "../utils/axiosInstance";
import React, { useState } from "react";


const AuthContext = React.createContext({
    user: {},
    accessToken: '',
    login: (email, password) => {
        Axios.post('/auth/login', {
            email: email,
            password: password
        }).then((res) => {
            console.log(res.data.user)
        }).catch((err) => {
            console.log(err);
        })
        
    },
    logout: () => {

    },
    renewToken: (token) => {

    }
});

export default AuthContext