import axios from "axios";

const axiosParams = {
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: "73fef285fb8b415e96a205000250603",
  },
};

export const axiosInstance = axios.create(axiosParams);
