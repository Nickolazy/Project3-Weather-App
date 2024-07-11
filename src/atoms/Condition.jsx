import GlobalSvgSelector from "../assets/global/GlobalSvgSelector"

const Condition = ({ condition, activeTheme, deleteCondition, isSettingsOpened, weatherData }) => {
  const handleDelete = () => {
    deleteCondition(condition.id);
  };

  if (!condition.isActive) {
    return null;
  }

  return (
    <div className={`flex justify-start items-center gap-5 my-5
      ${isSettingsOpened ? 'animate-shake' : ''}`}>
      <GlobalSvgSelector id={condition.icon} className="w-10 h-auto"/>
      <div className={`subText w-28
        ${activeTheme === 'dark' ? 'text-grayText' : 'text-grayBackgr'}`}>
        {condition.name}
      </div>
      <button onClick={handleDelete} className={`m-3 transition-transform active:scale-90 hover:scale-125
        ${isSettingsOpened ? 'block' : 'hidden' }`}>
        <GlobalSvgSelector id='x-mark-white' className={`w-5 h-auto
          ${activeTheme === 'dark' ? 'block' : 'hidden'}`}/>
          <GlobalSvgSelector id='x-mark-black' className={`w-5 h-auto opacity-60
          ${activeTheme === 'dark' ? 'hidden' : 'block'}`}/>
      </button>
      <div className={`subText
        ${activeTheme === 'dark' ? 'text-white' : 'text-black'}
        ${isSettingsOpened ? 'hidden' : 'block'}`}>
        {condition.info}
      </div>
    </div>
  )
}

export default Condition