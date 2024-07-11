
const MyButton = ({ buttons, activeButton, activeTheme, onClick }) => {
  const isActive = buttons.id === activeButton;

  return (
    <button onClick={onClick} className={`h3 px-5 py-1 rounded-md shadow-md transition-transform hover:scale-105
      ${isActive ? 'bg-blue text-white' : 
        (activeTheme === 'dark' ? 'bg-grayBackgr text-white' : 'bg-whiteBlock text-black')}`}>
      {buttons.name}
    </button>
  )
}

export default MyButton