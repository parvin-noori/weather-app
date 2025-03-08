import React from "react";
import { getIconUrl } from "../utils/weather";

export default function HourlyWeather({ data }) {
  const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <ul className="flex items-center gap-x-5 max-w-96 overflow-auto">
      {data.hourlyData.map((hour, index) => (
        <li key={index} className="flex flex-col gap-y-1">
          <span className="text-sm text-gray-500">
            {formatTime(hour.DateTime)}
          </span>
          <img
            src={getIconUrl(hour.WeatherIcon)}
            alt={hour.IconPhrase}
            className="size-10"
          />
          <span className="text-sm text-gray-500">{hour.PrecipitationProbability}%</span>
        </li>
      ))}
    </ul>
  );
}
