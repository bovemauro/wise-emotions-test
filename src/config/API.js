import axios from 'axios';

function API() {
  const API_LEY = 'DnPDW9Ol0WlavmDMYomRMoti4ZEpVbAV7F4ulXqvAcPts90zun';
  const CLIENT_SECRET = 'to9xi0XeLxaClCwrVb5ipSM79ajgyt2jNkEXDeo7';
  const axiosClient = axios.create({
    baseURL: 'https://api.petfinder.com/v2/',
    timeout: 60000,
    headers: {
      Accept: 'application/json',
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
