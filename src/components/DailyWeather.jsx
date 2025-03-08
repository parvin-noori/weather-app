import React from "react";
import { getIconUrl } from "../utils/weather";

export default function DailyWeather({ day, data }) {
  const getDayName = (dateString) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dateString);
    return days[date.getDay()];
  };
  return (
    <li className="grid grid-cols-4 [&>span]:flex [&>span]:justify-center">
      {console.log(day)}
      <p className="me-2">{getDayName(day.Date)}</p>
      <span>
        <img src={getIconUrl(day.Day.Icon)} alt={day.Day.IconPhrase} className="size-8" />
      </span>
      <span>{day.Temperature.Maximum.Value}°</span>
      <span>{day.Temperature.Minimum.Value}°</span>
    </li>
  );
}
