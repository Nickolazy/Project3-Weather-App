import { useState, useEffect } from "react";

import LoadingScreen from "./atoms/LoadingScreen";
import Settings from './atoms/Settings';
import Condition from "./atoms/Condition"
import MyButton from "./atoms/MyButton"
import DayInfo from "./atoms/DayInfo"
import GlobalSvgSelector from "./assets/global/GlobalSvgSelector"

import cloud from "../src/assets/png/cloud.png"

const Home = ({ activeTheme, weatherData, activeButton, setActiveButton, 
    isSettingsOpened, setSettingsState}) => {
  
      
  if (!weatherData || !weatherData.main) {
    return <LoadingScreen />;
  } 

  const { name, weather, main, wind, sys } = weatherData;
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0'); 
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
   
  const [conditions, setConditions] = useState([
    { id: 1, isActive: false, icon: 'temp', 
      name: 'Температура', 
      info: `${Math.round(main.temp)}° - ощущается как ${Math.round(main.feels_like)}°`
    },
    { id: 2, isActive: true, icon: 'pressure', 
      name: 'Давление',
      info: `${main.pressure} мм ртутного столба - нормальное`
    },
    { id: 3, isActive: true, icon: 'precipitation', 
      name: 'Осадки',
      info: `Без осадков`
    },
    { id: 4, isActive: false, icon: 'wet', 
      name: 'Влажность',
      info: `${main.humidity}%`
    },
    { id: 5, isActive: true, icon: 'wind', 
      name: 'Ветер',
      info: `${wind.speed} м/с на ${wind.deg}°`
    },
    { id: 6, isActive: false, icon: 'sunset', 
      name: 'Закат',
      info: `Время заката - ${new Date(sys.sunset * 1000).
        toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}` 
    }
  ]);

  const [deletedCount, setDeletedCount] = useState(3);

  useEffect(() => {
    setConditions([
      { ...conditions[0], 
        info: `${Math.round(main.temp)}° - ощущается как ${Math.round(main.feels_like)}°` },
      { ...conditions[1], 
        info: `${main.pressure} мм ртутного столба - нормальное` },
      { ...conditions[2], 
        info: `Без осадков` },
      { ...conditions[3], 
        info: `${main.humidity}%` },
      { ...conditions[4], 
        info: `${wind.speed} м/с на ${wind.deg}°` },
      { ...conditions[5], 
        info: `Время заката - ${new Date(sys.sunset * 1000).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}` }
    ]);
  }, [weatherData]);

  const deleteCondition = (id) => {
    if (deletedCount < 3) {
      setConditions(conditions.map(cond =>
        cond.id === id ? { ...cond, isActive: false } : cond
      ));
      setDeletedCount(deletedCount + 1);
    }
  };

  const addCondition = (id) => {
    setConditions(conditions.map(cond =>
      cond.id === id ? { ...cond, isActive: true } : cond
    ));
    setDeletedCount(deletedCount - 1);
  };

  const buttons = [
    {id: 1, name: 'На неделю'},
    {id: 3, name: 'На 10 дней'},
    {id: 2, name: 'На месяц'},
    // {id: 4, name: 'Отменить'}
  ];

  const chooseButton = (id) => {
    setActiveButton(id);
  };

  const findIconNow = (weatherId) => {
    let icon = '';


    if (weatherId >= 300 && weatherId < 400) {
      icon = 'small-rain';
    } else if (weatherId >= 500 && weatherId < 600) {
      icon = 'rain';
    } else if (weatherId >= 700 && weatherId < 800) {
      icon = 'small-rain-sun';
    } else if (weatherId === 800) {
      icon = 'sun';
    } else if (weatherId >= 801 && weatherId < 805) {
      icon = 'cloudy';
    } else {
      icon = '';
    }

    return icon;
  };

  const iconNow = weather ? findIconNow(weather[0]?.id) : '';
  
  return (
    <div className="mt-5">
        <div className="flex justify-between gap-14 ">
            <div className={`relative w-1/3 min-h-72 px-5 py-4 rounded-3xl shadow-2xl
            ${activeTheme === 'dark' ? 'bg-grayBackgr' : 'bg-whiteBlock'}`}>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="big text-blue -mb-8">
                          {Math.round(main.temp)}°
                        </div>
                        <div className={`h1
                          ${activeTheme === 'dark' ? 'text-white' : 'text-black'}`}>
                            Сегодня
                        </div>
                    </div>
                    <div>
                        <GlobalSvgSelector id={iconNow} className="xl:w-32 2xl:w-40 h-auto"/>
                    </div>
                </div>
                <div className={` absolute bottom-5 h2 text-grayText
                  ${activeTheme === 'dark' ? 'text-grayText' : 'text-grayBackgr'}`}>
                    <div>
                        Время: {hours}:{minutes}
                    </div>
                    <div>
                        Город: {name}
                    </div>
                </div>
            </div>
            <div className={`relative w-2/3 py-5 px-10 flex items-center rounded-3xl shadow-2xl
              ${activeTheme === 'dark' ? 'bg-grayBackgr' : 'bg-whiteBlock'}`}>

                <img src={cloud} className={`absolute right-0 top-0 w-4/6 rounded-tr-2xl z-0
                  ${activeTheme === 'dark' ? 'opacity-50' : 'opacity-100'}`}/>
                
                <Settings
                  activeTheme={activeTheme}
                  conditions={conditions}
                  addCondition={addCondition}
                  isSettingsOpened={isSettingsOpened}
                  setSettingsState={setSettingsState}/>
                
                <div className="relative z-10">
                  {conditions.map((condition) => (
                    <Condition key={condition.id} 
                    condition={condition} 
                    activeTheme={activeTheme}
                    deleteCondition={deleteCondition}
                    isSettingsOpened={isSettingsOpened}
                    weatherData={weatherData}/>
                  ))}
                </div>
            </div>
            </div>
            <div>
              <div className="flex justify-start items-center gap-4 mt-12">
                  {buttons.map((buttons, index) => (
                      <MyButton key={index} buttons={buttons} activeButton={activeButton} 
                        activeTheme={activeTheme} onClick={() => chooseButton(buttons.id)}/>
                  ))}
              </div>
              <div className={`w-full h-72 mt-4 flex justify-around items-center rounded-b-3xl shadow-2xl
                ${activeTheme === 'dark' ? 'bg-grayBackgr' : 'bg-whiteBlock'}`}>
                <DayInfo activeTheme={activeTheme}/>
                <DayInfo activeTheme={activeTheme}/>
                <DayInfo activeTheme={activeTheme}/>
                <DayInfo activeTheme={activeTheme}/>
                <DayInfo activeTheme={activeTheme}/>
                <DayInfo activeTheme={activeTheme}/>
                <DayInfo activeTheme={activeTheme}/>
              </div>
            </div>
            <div className="h-14">
            </div>
    </div>
  )
}

export default Home