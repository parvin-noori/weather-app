import React, { useContext } from "react";
import { WeatherContext } from "../contexts/weather-context";

export default function WeatherBox() {
  const { data, isLoading } = useContext(WeatherContext);
  return (
    <>
      <div className="bg-white/50 backdrop-blur-md w-max-content p-4 rounded-xl">
        {isLoading ? (
          <span className="size-5 animte-spin"></span>
        ) : (
          <div className="flex flex-col gap-y-5 items-center">
            <span className="text-purple-400">{data.location.name}</span>
            <span className="text-7xl text-purple-950">
              {data.current.temp_c}
            </span>
            <span>{data.forecast.forecastday[0].day.condition.text}</span>
            <img src={data.forecast.forecastday[0].day.condition.icon} alt="" />
          </div>
        )}
      </div>
    </>
  );
}
