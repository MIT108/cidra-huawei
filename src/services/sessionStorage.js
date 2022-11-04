import CryptoJS from 'crypto-js'

export const setInformation = (key, value) => {
    if (value) {
        value = JSON.stringify(value);
        var cipherValue = CryptoJS.AES.encrypt(value, 'cidra').toString()
        sessionStorage.setItem(key, cipherValue);
    } 
}

export const getInformation = (key) => {
    let data = sessionStorage.getItem(key);
    if (data) {
        data = CryptoJS.AES.decrypt(data, 'cidra');
        data = data.toString(CryptoJS.enc.Utf8);
        return JSON.parse(data)
    } else {
        return null
    }
}

export const getAccessToken = () => {
    let data = sessionStorage.getItem("cidraInformation");
    if (data) {
        data = CryptoJS.AES.decrypt(data, 'cidra');
        data = data.toString(CryptoJS.enc.Utf8);
        return JSON.parse(data).apiToken.accessToken
    }else {
        return null
    }
}

export const authUser = async () => {
    let data = await sessionStorage.getItem("cidraInformation");
    if (data) {
        data = CryptoJS.AES.decrypt(data, 'cidra');
        data = data.toString(CryptoJS.enc.Utf8);
        return JSON.parse(data).user
    } else {
        return null
    }
}

export const authRole = () => {
    let data = sessionStorage.getItem("cidraInformation");
    if (data) {
        data = CryptoJS.AES.decrypt(data, 'cidra');
        data = data.toString(CryptoJS.enc.Utf8);
        return JSON.parse(data).user.role
    } else {
        return null
    }
}

export const getRefreshToken = () => {
    let data = sessionStorage.getItem("cidraInformation");
    if (data) {
        data = CryptoJS.AES.decrypt(data, 'cidra');
        data = data.toString(CryptoJS.enc.Utf8);
        return JSON.parse(data).apiToken.refreshToken
    }else {
        return null
    }
}

export const removeInformation = (key) => {
    sessionStorage.removeItem(key);
}

export const clearSession = () => {
    sessionStorage.clear();
}