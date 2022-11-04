import axiosInstance from 'services/axios/axiosInterceptor'

export const historyList = async () => {
    try {
        let response = await axiosInstance.get("/logs/super-admin")
        var string = response.data.data
        var array = string.split('\n');
        var arrayObj = [];
        array.map((ary) => {
            var obj = ary.split(',');
            arrayObj.push({
                name: obj[0],
                action: obj[1],
                time: obj[2]
            })
        })
        arrayObj = arrayObj.reverse()
        return arrayObj
    } catch (error) {
        throw error
    }
}