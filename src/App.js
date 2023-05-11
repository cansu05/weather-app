import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import HavaDurumu from "./components/HavaDurumu";

const App = () => {
  const [weather, setweather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setweather(data);
    } catch {
      alert("Veri alınırken hata oluştu!");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  console.log(latitude, longitude, weather);
  return (
    <>
      <div className="wrapper absolute top-2/4 flex flex-col items-center justify-center  left-2/4 -translate-y-1/2 -translate-x-1/2 bg-sky-950 bg-opacity-60 text-white text-center h-3/6 w-3/6">
        <h2 className="text-4xl p-5 -mt-20 border-b-2 border-amber-400">Hava Durumu</h2>
        <HavaDurumu weather={weather} />
      </div>
    </>
  );
};

export default App;
