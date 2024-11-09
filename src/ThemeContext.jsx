
import  { createContext, useState,useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isClick, setClick] = useState(true);
  const [weatherStatus,setWeatherStatus]=useState(true)
  const handleClick = () => {
    setClick(!isClick);
    setWeatherStatus(!weatherStatus)
    
  };

  const themeStatus=()=>{
    if(weatherStatus){
      document.body.style.backgroundColor='#1F91DC'
  }
  else
      document.body.style.backgroundColor='#0d3d6a'
  
  }
  useEffect(()=>{
    themeStatus()
  },[weatherStatus])

  return (
    <ThemeContext.Provider value={{ isClick, handleClick,weatherStatus,themeStatus}}>
      {children}
    </ThemeContext.Provider>
  );
};
