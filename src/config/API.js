import axios from 'axios';

function API() {
  const token = localStorage.getItem('access_token');

  // manage missing token

  const axiosClient = axios.create({
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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
