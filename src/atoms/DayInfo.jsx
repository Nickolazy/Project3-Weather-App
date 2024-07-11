import GlobalSvgSelector from "../assets/global/GlobalSvgSelector"

const DayInfo = ({ activeTheme }) => {
  return (
    <div className={`p-6 2xl:pr-10 rounded-xl grid gap-2 shadow-3xl
      ${activeTheme === 'dark' ? 'bg-grayDark' : 'bg-blueLight'}`}>
      <div>
        <div className={`h2 
          ${activeTheme === 'dark' ? 'text-white' : 'text-black'}`}>
          Сегодня
        </div>
        <div className={`h4
          ${activeTheme === 'dark' ? 'text-grayText' : 'text-grayBackgr'}`}>
          28 авг
        </div>
      </div>
      <GlobalSvgSelector id="cloudy"/>
      <div>
        <div className={`h2 
          ${activeTheme === 'dark' ? 'text-white' : 'text-black'}`}>
          +18°
        </div>
        <div className={`subText
          ${activeTheme === 'dark' ? 'text-grayText' : 'text-grayBackgr'}`}>
          +15°
        </div>
      </div>
      <div className={`subText
          ${activeTheme === 'dark' ? 'text-grayText' : 'text-grayBackgr'}`}>
        Облачно
      </div>
    </div>
  )
}

export default DayInfo