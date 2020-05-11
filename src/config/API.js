import axios from 'axios';

function API() {
  const axiosClient = axios.create({
    baseURL: 'https://api.petfinder.com',
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
    },
  });

  axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        typeof error.response !== 'undefined' &&
        error.response.status === 401
      ) {
        // token expired
        // window.location.pathname = LOGIN;
      }

      return Promise.reject(error);
    }
  );

  return axiosClient;
}

export default API;
