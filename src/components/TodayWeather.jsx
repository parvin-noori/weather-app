import { getIconUrl } from "../utils/weather";

export default function TodayWeather({ data }) {
  return (
    <>
      <span className="text-7xl text-purple-950">{data.temperature}°</span>
      <span>{data.condition}</span>
      <img src={getIconUrl(data.icon)} alt="" />
    </>
  );
}
