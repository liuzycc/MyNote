import axios from 'axios'
import Vue from 'vue'
import { baseUrl } from "./env.js";


const isServer = Vue.prototype.$isServer || process.server

const ajax = axios.create({
    baseURL:baseUrl,
    responseType: 'json',
    withCredentials: true,
})

ajax.interceptors.response.use((response) => {
    const {
        data,
    } = response
    if (data && !isServer && data.success === false) {
        alert(data.message)
        // return Promise.reject(data)
    }
    return data
}, error => Promise.reject(error))

export default ajax
