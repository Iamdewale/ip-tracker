import React, {useState} from 'react'
import './App.css'

import IPTracker from './components/IPTracker'
import ImageSlider from './components/ImagesSlider'

function App() {
  const [location, setLocation] = useState('')

  const handlenewLocation = (newLocation) =>(
    setLocation(newLocation)
  )

  return (
    <div className='App'>
      <h1>IP Address tracker with location based images</h1>
      <IPTracker location={location} onNewLocation={handlenewLocation} />
      <ImageSlider location={location} />
    </div>
  )
}

export default App