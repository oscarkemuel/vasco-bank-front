import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: '',
  // baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.request.use(async (config) => {
  const tokenStoraged = localStorage.getItem("@vasco-bank:token");

  if(tokenStoraged) {
    config.headers.Authorization = `Bearer ${tokenStoraged}`;
  }

  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // TODO: redirect to login
    }
    return Promise.reject(error);
  }
);

const axiosInstance = (axiosInstanceCreated: AxiosInstance) => {
  return {
    get: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axiosInstanceCreated.get<T>(url, config);
    },
    put: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axiosInstanceCreated.put<T>(url, body, config);
    },
    post: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axiosInstanceCreated.post<T>(url, body, config);
    },
    delete: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axiosInstanceCreated.delete<T>(url, config);
    },
    patch: function <T>(
      url: string,
      body: unknown,
      config: AxiosRequestConfig = {}
    ) {
      return axiosInstanceCreated.patch<T>(url, body, config);
    },
    defaults: axiosInstanceCreated.defaults,
  };
};

export default axiosInstance(instance);