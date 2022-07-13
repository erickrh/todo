import React from 'react';
import { TodoContext } from '../TodoContext';
import { BsMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import './DarkMode.css';

function DarkMode() {
    const { darkMode, setDarkMode, darkModeToggle } = React.useContext(TodoContext);

    const changeIconState = () => {
        setDarkMode(prevState => !prevState);
        darkModeToggle();
    };
    
    return (
        <div className=''>
            <BsMoonFill
                className={`icon ${darkMode && 'icon-desactived'}`}
                onClick={changeIconState}
            />

            <BsSunFill
                className={`icon ${!darkMode && 'icon-desactived'}`}
                onClick={changeIconState}
            />
        </div>
    )
};

export { DarkMode };