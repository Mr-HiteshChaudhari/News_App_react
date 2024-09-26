import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Newsapp from './component/Newsapp'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Newsapp/>
      <Card/>
      
      
    </>
  )
}

export default App
