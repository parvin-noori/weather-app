import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axiosParams = {
  baseURL: BASE_URL,
  params: {
    key: "73fef285fb8b415e96a205000250603",
  },
};

export const axiosInstance = axios.create(axiosParams);
