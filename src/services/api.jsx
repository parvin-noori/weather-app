import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const WEATHER_KEY = import.meta.env.VITE_API_KEY;

const axiosParams = {
  baseURL: BASE_URL,
  params: {
    apikey: WEATHER_KEY,
  },
};

export const axiosInstance = axios.create(axiosParams);
