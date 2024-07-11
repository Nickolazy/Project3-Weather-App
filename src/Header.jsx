import { useState } from 'react';
import GlobalSvgSelector from "../src/assets/global/GlobalSvgSelector"

const Header = ({ activeTheme, changeTheme, cities,
  selectedCity, setSelectedCity, setCityToFind}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    if (searchInput.trim()) {
      setCityToFind(searchInput.trim());
      setSearchInput('');
    }
  };

  const handleCityChange = (event) => {
    setCityToFind(event.target.value);
  };


  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center gap-6">
        <GlobalSvgSelector id='header-logo'/>
        <div className="font-montserrat font-bold text-2xl text-blue">
          REACT WEATHER
        </div>
      </div>
      <div className="flex items-center gap-5">
        <input value={searchInput} onChange={handleInputChange} 
          type="text" id="searchInput" placeholder="Введите название города" 
            className={`h4 w-64 py-2 px-4 rounded-lg shadow-lg
              ${activeTheme === 'dark' ? 'bg-grayBackgr text-white' 
                : 'bg-blueLight text-black'}`}/> 
        <button onClick={handleSearchClick} type="button" id="searchButton" 
          className={`subText text-white bg-blue py-2 px-4 rounded-lg 
            shadow-lg hover:scale-105 transition-transform active:scale-90
              ${activeTheme ? '' : ''}`}> 
            Найти 
        </button>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={changeTheme} className="transition-transform active:scale-90 hover:scale-125">
          <GlobalSvgSelector id='change-theme'/>
        </button>
        <select 
          value={selectedCity}
          onChange={handleCityChange}
          className={`h4 rounded-lg py-2 px-5 shadow-lg
            ${activeTheme === 'dark' ? 'bg-grayBackgr text-white' : 'bg-blueLight text-black'}`}>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
            
          ))}
        </select>
      </div>
    </div>
  )
}

export default Header