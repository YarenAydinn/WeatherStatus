import { useContext, useEffect, useState } from 'react'
import sunDay from './img/day.png'
import moon from './img/half-moon.png'
import clouds from './img/clouds.png'
import stars from './img/stars.png'

import { ThemeContext, ThemeProvider } from './ThemeContext'

function AppContext() {
  const { isClick, handleClick, weatherStatus } = useContext(ThemeContext)
  const [randomIcons,setRandomIcons]=useState([clouds])
  


const assignIcon=()=>{
  const currentIcon=weatherStatus?clouds:stars
  const randomIndex=Math.floor(Math.random()*5)+1
  const iconsArray=Array(randomIndex).fill(currentIcon)
  setRandomIcons(iconsArray)
}

const randomNavigate=()=>{
  const top=Math.random()*80
  const left=Math.random()*60
  return {top:`${top}vh`,left:`${left}vw`,position:'absolute', overflow:'hidden'}
}

useEffect(()=>{
  assignIcon()
  const ınterval=setInterval(assignIcon,3000)

  return ()=>clearInterval(ınterval)
},[weatherStatus])
  return (
    <>
      <div className='w-36 flex justify-center mx-auto my-9'>
        <button onClick={() => handleClick()}>
          {
            isClick ? (
              <img src={sunDay} alt="Sun" />
            ) : (
              <img src={moon} alt="Moon" />
            )
          }
        </button>
      </div>
      <div className='flex max-h-screen my-9 overflow-x-hidden' >
      {
        
        randomIcons.map((icon,index)=>(
          <img key={index} src={icon} alt="Clouds" className="animate-slide-out-right space-x-4 h-36 my-10" style={randomNavigate()}/>
        ))
      }
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContext />
    </ThemeProvider>
  )
}

export default App
