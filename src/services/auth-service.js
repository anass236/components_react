import axios from "axios";

const API_URL = "http://localhost:5000/";

const register = (username, password) => {
    return axios.post(API_URL + "register", {
        username,
        password
    });
};

const login = (username, password) => {
    return axios.post(API_URL + "auth", {
        username,
        password
    })
        .then(response => {
            if (response.data.access_token){
                localStorage.setItem("user", JSON.stringify({username:username, access_token:response.data.access_token}));
            }
            return response.data;

        }).catch((error) => {
            return error
        });
};



const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
