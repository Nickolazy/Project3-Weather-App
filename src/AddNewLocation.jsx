import { useState, useEffect } from "react";
import axios from 'axios';

const API_KEY = "bf4033a313d461933165d0bd5a1b6442";

const AddNewLocation = ({setWeatherData, cityToFind, error, setError, addCity, setSelectedCity}) => {
  const [checkCity, setCheckCity] = useState('');

  useEffect(() => {
    if(cityToFind !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityToFind}&lang=ru&appid=${API_KEY}&units=metric`;
      const fetchWeather = async () => {
        try {
          const response = await axios.get(apiUrl);
          setWeatherData(response.data);
          addCity(response.data.name);
          setSelectedCity(response.data.name);
          setCheckCity(cityToFind);
        } catch (error) {
          setError('Failed to fetch weather data');
        }
      };
      fetchWeather();
    }  
  }, [cityToFind]);

  if (error && cityToFind !== checkCity) {
    return (
      <div className={`text-red flex justify-center`}>
        {/* Нет данных для города {cityToFind}! */}
      </div>)
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default AddNewLocation