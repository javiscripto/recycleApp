import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapComponent from './components/Mapa'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>funcionando</p>
      <MapComponent />
    </>
  )
}

export default App