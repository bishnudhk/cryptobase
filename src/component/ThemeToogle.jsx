import React,{useContext} from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";
import {ThemeContext} from '../context/ThemeContext';

const ThemeToogle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="p-2">
      {theme === "dark" ? (
        <div className="flex items-center cursor-pointer"
         onClick={()=> setTheme(theme === 'dark' ? 'light': 'dark')}>
          <BsSun className="text-primary text-2xl mr-2" /> Light Mode
        </div>
      ) : (
        <div className="flex items-center cursor-pointer " 
        onClick={()=> setTheme(theme === 'dark' ? 'light': 'dark')} >
          <BsMoonStars className="text-primary text-2xl mr-2" /> Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToogle;
