import React, { useState, useEffect } from 'react';
import axios from 'axios';


function IPTracker({ onLocationChange }) {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Fetch location based on current IP if no custom IP is provided
    fetchLocation();
  }, []);

  // Function to fetch location based on an IP address
  const fetchLocation = async (customIp) => {
    try {
      const response = await axios.get("https://ipinfo.io/${customIp || ''}/json?token=117c8f6af7cc6a");
      const location = response.data.city;
      setLocation(location);
      onLocationChange(location); // Pass location to parent component
    }catch (error) {
      console.error('Error fetching location data', error);
    }
  };

  // Handler for the input form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchLocation(ipAddress); // Fetch location based on entered IP
  };

  return (
    <div className='iptracker'>
      <h2>Enter an IP Address</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter IP address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button type="submit">Track</button>
      </form>
      <p>{location ? `Location: ${location}` : `Tracking IP and Location...`}</p>
    </div>
  );
}

export default IPTracker;