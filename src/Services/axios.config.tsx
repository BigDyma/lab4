import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const api = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: 'https://pure-caverns-82881.herokuapp.com/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Access-Token': 'eba21493a6c72879e81775be6149a64f0e42836d38971108f45b4f2a244e95d2'
    }
  });

  // attach jwt
  instance.interceptors.request.use((config) => 
    // eslint-disable-next-line no-param-reassign
     config
  );

  // middleware to parse response and return custom JSO if there was an error.
  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data, // JSON.parse(response.data),
    (reason: AxiosError) => {
      console.log(reason.response?.status);
      return {
        error: reason.response?.data || 'your input is not good',
        statusText: reason.response?.statusText
      };
    }
  );

  return instance;
};

export default api;