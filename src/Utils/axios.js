import axios from "axios";
import { BASE_URL } from "../Utils/constant";

const clientAxios = axios.create({
  baseURL: BASE_URL,
});

clientAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.code === "ERR_NETWORK") {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default clientAxios;
