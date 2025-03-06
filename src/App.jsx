import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./services/api";

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
  return <>{data ? console.log(data.location) : null}</>;
}

export default App;
