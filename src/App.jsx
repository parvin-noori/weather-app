import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./services/api";
const BASE_URL = import.meta.env.VITE_BASE_URL;

function App() {
  const getWeather = async () => {
    const { data } = await axiosInstance.get("/current.json", {
      params: {
        q: "Mashhad",
      },
    });

    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["wheather"],
    queryFn: getWeather,
  });
  return <>{isLoading ? <p>loading...</p> : <p>{data.location.name}</p>}</>;
}

export default App;
