export default function TodayWeather({ data }) {
  const today = data.forecast.forecastday[0];

  return (
    <>
      <span className="text-7xl text-purple-950">{data.current.temp_c}°</span>
      <span>{today.day.condition.text}</span>
      <img src={today.day.condition.icon} alt="" />
    </>
  );
}
