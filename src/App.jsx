import { useState, useEffect } from "react";

import CheckLocation from "./atoms/CheckLocation";
import AddNewLocation from "./AddNewLocation";
import Header from "./Header"
import Home from "./Home"

const App = () => {
  const [activeTheme, setActiveTheme] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [isSettingsOpened, setSettingsState] = useState(false);

  const [location, setLocation] = useState({ lat: null, lon: null });
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [isCityExists, setCityExists] = useState(false);

  const [cityToFind, setCityToFind] = useState('');

  const addCity = (city) => {
    if (!cities.includes(city)) {
      setCities([...cities, city]);
    }
  };

  const changeTheme = () => {
    if(activeTheme === 'dark') setActiveTheme('light');
    if(activeTheme === 'light') setActiveTheme('dark');
  }

  useEffect(() => {
    setActiveTheme('dark');
    setActiveButton(1);
    setSettingsState(false);
  }, []);

  return (
    <div className={`min-h-screen xl:px-32 2xl:px-60
      ${activeTheme === 'dark' ? 'bg-dark' : 'bg-white'}`}>
      <CheckLocation
        location={location}
        setLocation={setLocation}
        weatherData={weatherData}
        setWeatherData={setWeatherData}
        error={error}
        setError={setError}
        
        selectedCity={selectedCity}
        isCityExists={isCityExists}
        setCityExists={setCityExists}
        addCity={addCity}/>
        
      <Header 
        activeTheme={activeTheme} 
        changeTheme={changeTheme}
        
        cities={cities}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}

        setCityToFind={setCityToFind}/>

      <AddNewLocation
        setWeatherData={setWeatherData}
        cityToFind={cityToFind}
        error={error}
        setError={setError} 
        addCity={addCity}
        setSelectedCity={setSelectedCity}/>
      
      <Home 
        activeTheme={activeTheme}

        weatherData={weatherData}

        activeButton={activeButton}
        setActiveButton={setActiveButton}

        isSettingsOpened={isSettingsOpened}
        setSettingsState={setSettingsState}

      />
    </div>
  )
}

export default App