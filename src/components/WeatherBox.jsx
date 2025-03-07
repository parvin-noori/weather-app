import React, { useContext } from "react";
import { WeatherContext } from "../contexts/weather-context";
import TodayWeather from "./TodayWeather";
import LocationTitle from "./LocationTitle";
import WeeklyWeather from "./WeeklyWeather";
import HourlyWeather from "./HourlyWeather";

export default function WeatherBox() {
  const { data, isLoading } = useContext(WeatherContext);
  return (
    <>
      <div className="bg-white/50 backdrop-blur-md w-max-content p-4 rounded-xl">
        {isLoading ? (
          <span className="size-5 animte-spin"></span>
        ) : (
          <div className="flex flex-col gap-y-5 items-center">
            <LocationTitle data={data} />
            <TodayWeather data={data} />
            <HourlyWeather data={data}/>
            <WeeklyWeather data={data} />
          
          </div>
        )}
      </div>
    </>
  );
}
