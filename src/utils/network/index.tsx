import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {
    baseURL: "https://api.pokemontcg.io/v2",
    headers: {
        'Content-Type': 'application/json'
    },
    proxy: false,
}

export const instanceAxios: AxiosInstance = axios.create(config)