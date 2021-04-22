import * as axios from "axios";
import {setUserData} from "../Redux/Reducers/AuthReducer";



export const usersAPI = {
    getUsers() {
        return axios.get('api/auth/profiles')
            .then(response => {
                return response.data })
    },
    registr(body) {
        return axios.post('api/auth/register', body)

    },
    login(body) {
        return axios.post('api/auth/login', body)
            .then(res => {
                return res.data

            } )
    }
}


