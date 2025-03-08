import { Children, createContext } from "react";
import { axiosInstance } from "../services/api";
import { useQuery } from "@tanstack/react-query";

export const WeatherContext = createContext();

const getWeather = async () => {
  const { data: locationData } = await axiosInstance.get(
    "/locations/v1/cities/search",
    {
      params: {
        q: "Mashhad",
      },
    }
  );

  const locationKey = locationData[0].Key; // Extract location key
  const { data: weatherData } = await axiosInstance.get(
    `/currentconditions/v1/${locationKey}`
  );

  const { data: hourlyData } = await axiosInstance.get(
    `/forecasts/v1/hourly/12hour/${locationKey}`
  );
  const { data: forecastData } = await axiosInstance.get(
    `/forecasts/v1/daily/5day/${locationKey}`,
    {
      params: {
        metric: true, // Optional: For Celsius temperatures, if you prefer Fahrenheit, set to false
      },
    }
  );

  return {
    city: locationData[0].LocalizedName, // City name
    temperature: weatherData[0].Temperature.Metric.Value, // Temperature in Celsius
    condition: weatherData[0].WeatherText, // Weather description
    isDayTime: weatherData[0].IsDayTime, // Day or Night
    icon: weatherData[0].WeatherIcon, // Weather Icon Code
    condition: weatherData[0].WeatherText, // Weather description (e.g., Sunny, Windy)
    hourlyData,
    forecastData
  };
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
