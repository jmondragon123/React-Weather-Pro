import React from 'react'
import '../index.css';

function Weatherinfo(props) {
    const data = props.weathData;
    if (!props.isLoading) { return <p>Still Loading</p>}
    else {
        let cur_date = unixDate_current(data.dt);
        const weather_icon = data.weather[0].icon;
        return (
            [<div className='weather_container'>
                <div className='weather_info'>
                <h3>{cur_date}</h3>
                <h1 className='location'>{data.name}</h1>
                <h2 className='temperature'>{(data.main.temp).toFixed(0) + "\u00B0"}</h2>
                <div className='date_cond'>
                    <p>Feels like: {(data.main.feels_like).toFixed(0) + "\u00B0"}</p>
                    <p>{data.weather[0].description}</p>
                </div>
                
            </div>
            <div className='weather_icon'>
                <img src={`https://openweathermap.org/img/wn/${weather_icon}@4x.png`} alt='Weather Icon'></img>
            </div>
            </div>,
            <div className='weather_extra_info'>
                <p>High {(data.main.temp_max).toFixed(0) + "\u00B0"}</p>
                <p>Low {(data.main.temp_min).toFixed(0) + "\u00B0"}</p>
        <p>Humidity: {data.main.humidity}%</p>
            </div>
            
        ]
        )
    }
    
}

function unixDate_current(unix_time){
    const dateObject = new Date(unix_time * 1000);
    const options = {hour: 'numeric', minute: 'numeric' , month: 'short', day: 'numeric' };
    let date_formated = dateObject.toLocaleString("en-US", options);
    return date_formated;
}

export default Weatherinfo
