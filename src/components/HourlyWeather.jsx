import React from "react";

export default function HourlyWeather({ data }) {
  return (
    <ul className="flex items-center gap-x-5 max-w-96 overflow-auto">
      {data.forecast.forecastday[0].hour.map((hour, index) => (
        <li key={index} className="flex flex-col gap-y-1">
          <span className="text-sm text-gray-500">{hour.time.split(" ")[1]}</span>
          <img src={hour.condition.icon} alt={hour.condition.text} className="size-10"/>
          <span className="text-sm text-gray-500">{hour.chance_of_rain}%</span>
        </li>
      ))}
    </ul>
  );
}
