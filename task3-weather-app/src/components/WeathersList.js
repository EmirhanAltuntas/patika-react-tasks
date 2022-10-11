import React, { useEffect } from 'react'
import { useWeather } from '../context/WeatherContext'
import axios from 'axios'
function WeathersList() {


    const {weather, setWeather,city,api_key}= useWeather(null)
 
    useEffect(() => {
     
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city.name}&appid=${api_key}&units=metric`)
        .then(response => {
          const dates = response.data.list
          .map((item, i) => {
            return item.dt_txt.split(" ")[0];
          })
          .filter((item, i, currArr) => {
            return currArr.indexOf(item) === i;
          });
  
        let sortedResults = [];
        for(let theDate of dates) {
          let currentdate = new Date(theDate);
          let day = currentdate.toLocaleString('tr-tr', {weekday: 'long'});
        // console.log(day);
  
          sortedResults.push({
            date: theDate,
            dateName:day,
            weathers: []
          });
        }
    
        for(let item of response.data.list) {
          let itemDate = item.dt_txt.split(" ")[0]; 
          for(let result of sortedResults) {
            if(result.date === itemDate) {
              result.weathers.push(item);
            }
          }
        }
    
         //console.log('sortedResults', sortedResults);
        // console.log(dates);
         setWeather({city:response.data.city,weatherList:sortedResults})
        })
  
    }, [city])
   // console.log(weather);
  // Have a good days :) Emirhan Altuntaş ^^
    return (


      <div className="row mt-5  ">
                {weather && weather.weatherList.map((item,index)=>(
                  <div className="col-lg-4 col-md-6 mb-2 mt-2">
                  <div className="card text-center h-100 m-auto" style={{width:"17rem"}} >
                   
                    <div className="card-body" >
                      <div>
                        <div>
                          <h5 style={{color:"rgb(150,150,150)"}}>
                            {item.dateName}
                          </h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                     
                    <div className="row">
                      <div className="col mt-3 p-0">
  
                      <div className="row" key={index}>
                            <div className="col p-0">
                                <h5 >
                                  <span>{Math.round(item.weathers[0].main.temp_max) +"°C /" }</span>
                                  <span style={{color:"rgb(170,170,170)",fontSize:"20px" ,marginLeft:"3px"}}>{`${Math.round(item.weathers[0].main.temp_min)}°C`}</span>
                                </h5>
                                
                            </div>
                      </div>
  
                       
                        
                      <div className="row mt-2">
                            <div className="col">
                                <h5 style={{fontSize:"13px",color:"rgb(72,72,72)"}}>{city.name}</h5>
                            </div>
                      </div>
                     
                      </div>
                      
                    </div>
                        
                        </div>
                        <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                            <img src={`https://openweathermap.org/img/wn/${item.weathers[0].weather[0].icon}.png`} class="card-img-top main-img m-auto" alt="..."/>
                            </div>
                      </div>
                        </div>
                      </div>
                    
                    </div>
                   
                  </div>
                </div>
                ))
  
                }
            </div>
    
       
    );
}

export default WeathersList