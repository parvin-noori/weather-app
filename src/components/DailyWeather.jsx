import React from "react";

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
      <p className="me-2">{getDayName(day.date)}</p>
      <span>
        <img src={day.day.condition.icon} alt="icon" className="size-8" />
      </span>
      <span>{day.day.maxtemp_c}°</span>
      <span>{day.day.mintemp_c}°</span>
    </li>
  );
}
