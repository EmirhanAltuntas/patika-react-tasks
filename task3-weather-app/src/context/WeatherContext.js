import { createContext, useContext, useState } from "react";
import { Cities } from "../CitiesList";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) =>{

    const [city, setCity] = useState({
      "id": 317106,
      "name": "Denizli",
      "state": "",
      "country": "TR",
      "coord": {
        "lon": 29.06982,
        "lat": 37.84016
      }
    },)
    const [weather,setWeather] = useState();
    var api_key = "8de1db426649010ab304078654a289f4"

    const cities = Cities
  

    const values ={
        city,
        setCity,
        cities,
        weather,
        setWeather,
        api_key
    }

    return <WeatherContext.Provider value={values}>
        {children}
    </WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)

