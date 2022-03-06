import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL_POKEMON,
    headers: {
        'Content-Type': 'application/json'
    },
    proxy: false,
}

export const instanceAxios: AxiosInstance = axios.create(config)