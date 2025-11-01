
import React from 'react'

const WeatherDisplay = ({weather}) => {
  const tempStyle = {
    color: weather.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>temperature: <span style={tempStyle}>{weather.temperature}</span></p>
      <p>conditions: {weather.conditions}</p>
    </div>
  )
}

export default WeatherDisplay;