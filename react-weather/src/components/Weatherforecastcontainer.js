import React, { useState, useEffect } from 'react';
import Weatherforecast from './Weatherforecast';

function Weatherforecastcontainer() {
    const [apiState, setApiState] = useState({ loaded: false, weatherData: null})
    useEffect(() => {
        if (navigator.geolocation) {
            
            navigator.geolocation.getCurrentPosition(success);
            
        } else { 
            alert("Geolocation is not supported by this browser.");
        }
        
        function success(position) {
            const key = "98807e565c31403b2279d920830de7cb";
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            getCityWeather(key,lat,long);
        }

        function getCityWeather(key,lat,long) {
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=imperial&appid=${key}`;
            fetch(url)
                .then(respone => respone.json())
                .then(data => {
                    setApiState ({loaded: true, weatherData: data});
                })
        }
    }, []);
    return (
        <Weatherforecast forecastData={apiState.weatherData} isLoading = {apiState.loaded}/>
    )
}

export default Weatherforecastcontainer
