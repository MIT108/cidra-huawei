import axiosInstance from 'services/axios/axiosInterceptor'
import { removeInformation } from 'services/sessionStorage';
import { getAccessToken } from 'services/sessionStorage';
import {setInformation} from 'services/sessionStorage'

export const loginAction = async (data) => {
    try {
        const postData = {
            email: data.email, 
            password: data.password
        }
        let response = await axiosInstance.post('/login', postData);
        setInformation("cidraInformation", response.data.data)
        return response
    } catch (error) {
        throw error
    }
}

export const checkLogin =  () => {
    if (getAccessToken()) {
        return true;
    } else {
        return false;
    }
}

export const logoutAction = () => {
    try {
        removeInformation("cidraInformation")
        return true
    } catch (error) {
        return error
    }
}
