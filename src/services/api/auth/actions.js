import axiosInstance from 'services/axios/axiosInterceptor'
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