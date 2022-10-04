import React from 'react';
import { BsMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import './DarkMode.css';

function DarkMode({ darkMode, setDarkMode, darkModeToggle }) {
  
  const changeIconState = () => {
    setDarkMode(prevState => !prevState);
    darkModeToggle();
  };
    
  return (
    <div className=''>
      <BsMoonFill
        className={`icon ${darkMode && 'icon-deactivated'}`}
        onClick={changeIconState}
      />

      <BsSunFill
        className={`icon ${!darkMode && 'icon-deactivated'}`}
        onClick={changeIconState}
      />
    </div>
  );
}

export { DarkMode };