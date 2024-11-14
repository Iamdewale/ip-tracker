import React, { useState } from 'react';
import IPTracker from './components/IPTracker';
import ImageSlider from './components/ImageSlider';
import './App.css';

function App() {
  const [location, setLocation] = useState(null);

  const handleNewLocation = (newLocation) => {
    setLocation(newLocation)
  }


  return (
    <div className="App">
      <h1>IP Address Tracker with Location-Based Images</h1>
      <IPTracker onLocationChange={handleNewLocation} />
      <h2>{location && <ImageSlider location={location} />}</h2>
    </div>
  );
}

export default App;