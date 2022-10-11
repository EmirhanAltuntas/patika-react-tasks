import React from 'react'
import CitiesLists from './CitiesLists'
import Header from './Header'
import "./style.css"
import WeathersList from './WeathersList'
function Container() {
  return (
    <div className='main'>
        <div className='row'>
            <div className='col-md-12'>
                 <Header/>
                 <CitiesLists/>
                 <WeathersList/>
            </div>
        </div>
      
        
    </div>
  )
}

export default Container