import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Contactus from './components/Contactus'
import Button from './components/Button'
import Contactform from './components/Contactform'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>    
      <Contactus/>  
      {/* <Button/> */}
      <Contactform/>

    </>
  )
}

export default App
