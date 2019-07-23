import axios from "axios";

import { baseUrl } from "./env.js";

axios.defaults.timeout = 5000; // 设置请求超时
axios.defaults.baseURL = baseUrl; // 默认请求地址

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const fetch = (url, config = {}) => {
  return axios({
    url,
    ...config
  });
};
export default fetch;
