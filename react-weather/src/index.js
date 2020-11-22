import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weathertitle from './components/Weathertitle';
import Weatherinfocontainer from './components/Weatherinfocontainer';
import Weatherforecastcontainer from './components/Weatherforecastcontainer';


ReactDOM.render(
  <React.StrictMode>
    <div className='weather_pro'>
      <div className='weather_pro_container'> 
        <Weathertitle />
        <Weatherinfocontainer />
        <Weatherforecastcontainer />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

