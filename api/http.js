import axios from "axios";

export const API_URL = "http://46.29.161.56";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.post(`${API_URL}/api/token/refresh/`, {
//           withCredentials: true,
//           refresh: localStorage.getItem("refresh"),
//         });
//         localStorage.setItem("token", response.data.access);

//         return $api.request(originalRequest);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     throw error;
//   }
// );

export default $api;
