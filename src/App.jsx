import { useQuery } from "@tanstack/react-query";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import MainLayout from "./layouts/MainLayout";
import WeatherBox from "./components/WeatherBox";

function App() {
  return (
    <>
      <MainLayout>
        <WeatherBox />
      </MainLayout>
      {/* {data &&
        console.log(
          data.forecast.forecastday[0].day.maxtemp_c,
          data.forecast.forecastday[0].day.mintemp_c
        )} */}
      {/* {data &&
        data.forecast.forecastday[0].hour.map((hour) =>
          console.log(hour.time.split(" ")[1], hour.temp_c)
        )} */}
      {/* {data && console.log(data.current.temp_c)} */}
      {/* {data && console.log(data.forecast.forecastday[0].day.condition.text)} */}
    </>
  );
}

export default App;
