import React from "react";
import DailyWeather from "./DailyWeather";

export default function WeeklyWeather({ data }) {
  return (
    <ul>
      {data.forecastData.DailyForecasts.map((day, index) => (
        <DailyWeather key={index} day={day} data={data} />
      ))}
    </ul>
  );
}
