import React from 'react'
import '../index.css';

function Weatherforecast(props) {
    const data = props.forecastData;
    console.log(data);
    if (!props.isLoading) { return <p>Loading forecast..</p>}
    else{
        const forecast_array = data.daily;
        return (
            <div className='weather_forecast'>
                {forecast_array.map((forecast_element) => (
                <div className='forecast'> 
                <p className='forecast_Date'>{unixDate_forecast(forecast_element.dt)}</p> 
                <div className='forecast_info'>
                    <img src={`https://openweathermap.org/img/wn/${forecast_element.weather[0].icon}.png`} alt='Forecast_icon'></img>
                    <p>{(forecast_element.temp.max).toFixed(0)}/{(forecast_element.temp.min).toFixed(0) + "\u00B0F"}</p>
                    <p>{forecast_element.weather[0].description}</p>
                </div>
                </div>
                ))}
            </div>
        )
    }
    
}

function unixDate_forecast(unix_time){
    const dateObject = new Date(unix_time * 1000);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    let date_formated = dateObject.toLocaleString("en-US", options);
    return date_formated;
}

export default Weatherforecast
