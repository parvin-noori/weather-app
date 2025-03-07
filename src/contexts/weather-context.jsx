import { Children, createContext } from "react";
import { axiosInstance } from "../services/api";
import { useQuery } from "@tanstack/react-query";

export const WeatherContext = createContext();

const getWeather = async () => {
  const { data } = await axiosInstance.get("/forecast.json", {
    params: {
      q: "Mashhad",
      days: 8,
    },
  });

  return data;
};

export const WeatherProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["wheather"],
    queryFn: getWeather,
  });
  return (
    <WeatherContext.Provider value={{ data, isLoading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};
