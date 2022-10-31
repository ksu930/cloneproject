import axios from "axios";

const api = axios.create({
    baseURL: "13.124.216.20:8080",
})

api.interceptors.request.use(
    function (config) {
      if (
        config.url !== "/login" ||
        config.url !== "/signup" ||
        config.url !== "/id-duplicate" ||
        config.url !== "/name-duplicate" ||
        config.url !== "/best"
        ) {config.headers.accessToken = localStorage.getItem("accessToken");}
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  
  // api요청 주소가 login일 경우 access token과 refresh token을 받아 로컬스토리지에 저장해준다.
  api.interceptors.response.use(
    function (response) {
      if (response.config.url === "/login" && response.data.success) {
        localStorage.setItem("accessToken", response.headers.accessToken);
        localStorage.setItem("refreshToken", response.headers.refreshToken);
      }
      return response;
    },
    function (error) {
      return Promise.reject(error.response.data.error);
    }
  );
  
  export default api;