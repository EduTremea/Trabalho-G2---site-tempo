import React from 'react';

const weatherTranslations = {
  "clear sky": "Céu limpo",
  "few clouds": "Algumas nuvens",
  "scattered clouds": "Nuvens dispersas",
  "overcast clouds":"Nuvens nubladas",
  "broken clouds": "Nuvens quebradas",
  "shower rain": "Chuva de banho",
  "rain": "Chuva",
  "thunderstorm": "Trovoada",
  "snow": "Neve",
  "mist": "Névoa",
};

const translateDescription = (description) => {
  return weatherTranslations[description] || description;
};

const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const { temp } = main;
  const { description, icon } = weatherDetails[0];

  return (
    <div className="weather-info">
      <h2>Tempo em {name}</h2>
      <p>Temperatura: {temp} °C</p>
      <p>{translateDescription(description)}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
    </div>
  );
};

export default WeatherInfo;
