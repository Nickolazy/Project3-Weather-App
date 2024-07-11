import { useState, useEffect } from "react";
import axios from 'axios';

const API_KEY = "bf4033a313d461933165d0bd5a1b6442";

const CheckLocation = ({ location, setLocation, setWeatherData, error, setError, addCity }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isLocationSet, setIsLocationSet] = useState(false);
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
            setIsLocationSet(true);
          },
          (error) => {
            setError(error.message);
            setIsLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser :(');
        setIsLoading(false);
      }
    }, [setLocation]);
  
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          if (isLocationSet) {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&lang=ru&appid=${API_KEY}&units=metric`;
            const response = await axios.get(apiUrl);
            if (response.data.name === 'Mykolayivka') {
              response.data.name = 'Николаевка';
            }
            setWeatherData(response.data);
            addCity(response.data.name);
            setIsLoading(false);
          }
        } catch (error) {
          setError('Failed to fetch weather data');
          setIsLoading(false);
        }
      };
  
      if (isLocationSet) {
        fetchWeather();
      }
    }, [isLocationSet, location.lat, location.lon]);
  
    if (isLoading) {
      return (
        <div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="text-white">
          {/* Error: {error} */}
        </div>
      );
    }
    
    return (
      <div>
      </div>
    );
}

export default CheckLocation;
