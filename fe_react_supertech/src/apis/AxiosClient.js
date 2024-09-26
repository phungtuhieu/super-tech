import axios from "axios";

const config = {
  baseURL: import.meta.env.VITE_BASE_URL_API
}

const AxiosClient = axios.create(config);

AxiosClient.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  if (error?.response?.status === 401) {
  //  unAuthorization(error);
  }

  return Promise.reject(error);
});

export default AxiosClient;