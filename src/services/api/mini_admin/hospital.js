import axiosInstance from 'services/axios/axiosInterceptor'

// export const listAdminAction = async (pages) => {
//     try {
//         let response = await axiosInstance.get(`/mini-admin?page=${pages}`);
//         return response
//     } catch (error) {   
//         throw error
//     }
// }

export const addHospital = async (data) => {
    try {
        let response = await axiosInstance.post('/mini-admin/register', data);
        return response
    } catch (error) {
        throw error;
    }
}