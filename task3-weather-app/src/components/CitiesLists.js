import React from 'react'
import { Cities } from '../CitiesList'
import { useWeather } from '../context/WeatherContext'

function CitiesLists() {
  
    const {city ,setCity,cities} = useWeather()

   // console.log(cities);
    const onChange = (e) => {
        // console.log(e.target.value);
         var selectedCity = cities.find(function (item, index) {
           if (item.name == e.target.value)
             return true;
         });
         setCity(selectedCity)
         
       }
    //   console.log(city);
  return (
    <div>
    <div className="row mt-3" >
      <div className="col-md-12 d-flex justify-content-center ">
      <select className="form-select  selectBox" onChange={onChange} defaultValue={city} >
        {

          cities.map((item, index) => (
            <option key={index} >{item.name}</option>
          ))
        }
      </select>
      </div>
    </div>
    </div>
  )
}

export default CitiesLists