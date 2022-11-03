import axiosInstance from 'services/axios/axiosInterceptor'

export const listAdminAction = (data) => {
    try {
        let response = axiosInstance.post('', data);

    } catch (error) {
        
    }
}
