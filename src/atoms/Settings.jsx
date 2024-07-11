import GlobalSvgSelector from "../assets/global/GlobalSvgSelector"

const Settings = ({ activeTheme, conditions, addCondition, isSettingsOpened, setSettingsState }) => {
	const openSettings = () => {
    setSettingsState(true);
  }

  const closeSettings = () => {
    setSettingsState(false);
  }

  const handleAddCondition = (id) => {
    addCondition(id);
  };

  return (
		<>
			<button onClick={openSettings} className='absolute right-10 top-10 hover:animate-spin-slow'>
				<GlobalSvgSelector id="settings-white" className={`w-12 h-auto
					${activeTheme === 'dark' ? 'block' : 'hidden'}`}/>
				<GlobalSvgSelector id="settings-black" className={`w-12 h-auto opacity-60
					${activeTheme === 'dark' ? 'hidden' : 'block'}`}/>
			</button>

			<div className={`absolute inset-0 rounded-3xl flex justify-end items-center
					${isSettingsOpened ? 'block' : 'hidden'}
					${activeTheme === 'dark' ? 'bg-grayDark opacity-80' : 'bg-blueLight'}`}>
						<div>
							{conditions.map((condition) => (
								<div key={condition.id} className={`flex items-center gap-5 my-5 mr-60
									${condition.isActive ? 'hidden' : 'block'}`}>
									<div className={`subText w-28 
										${activeTheme === 'dark' ? 'text-grayText' : 'text-grayBackgr'}`}>
										{condition.name}
									</div>
									<button onClick={() => handleAddCondition(condition.id)} className={`m-3 transition-transform 
										active:scale-90 hover:scale-125 
										${isSettingsOpened ? 'block' : 'hidden' }`}>
										<GlobalSvgSelector id='x-mark-white' className={`w-5 h-auto rotate-45
											${activeTheme === 'dark' ? 'block' : 'hidden'}`}/>
										<GlobalSvgSelector id='x-mark-black' className={`w-5 h-auto rotate-45 opacity-60
											${activeTheme === 'dark' ? 'hidden' : 'block'}`}/>
									</button>
								</div>
							))}
						</div>
				<button onClick={closeSettings} className='absolute right-10 bottom-10 transition-transform hover:scale-110'>
					<GlobalSvgSelector id="done-white" className={`w-12 h-auto
						${activeTheme === 'dark' ? 'block' : 'hidden'}`}/>
					<GlobalSvgSelector id="done-black" className={`w-12 h-auto
						${activeTheme === 'dark' ? 'hidden' : 'block'}`}/>
				</button>
			</div>
		</>
  )
}

export default Settings