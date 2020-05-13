import axios from 'axios';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 如跨域请求时要带上cookies,则设置为true
  timeout: 5000, // 请求超时时长
});

service.interceptors.request.use(
  (config) => {
    // 按需添加内容
    // eslint-disable-next-line no-empty
    if (config.method === 'post') {

    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    // 如果返回的状态不是200 就报错 按需修改
    if (response.status && response.status !== 200) {
      return Promise.reject(new Error('Error'));
    }
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default service;
