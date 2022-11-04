import axiosInstance from 'services/axios/axiosInterceptor'

export const listAdminAction = (data) => {
    try {
        let response = axiosInstance.post('', data);

    } catch (error) {

    }
}

export const addAdmin = (data) => {
    try {
        let response = axiosInstance.post('/mini-admin/register', data);
        return response
    } catch (error) {
        throw error;
    }
}
