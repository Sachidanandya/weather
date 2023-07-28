/**/

import React, { useEffect, useState } from 'react'
import Wcard from './Wcard';

const Temp = () => {
const [searchvalue , setsearchvalue]=useState("pune");
const [tempinfo,settemp]=useState("");

const  getWeatherInfo= async()=>{
 try {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=614afc7f35bb9133d4326b5512f0edc7`
    const res = await fetch(url);
    const data= await res.json();
     
const {temp , humidity ,pressure  }=data.main;
const {main: weathermood}=data.weather[0];
const{name}=data;
const {speed}=data.wind;
const { country,sunset}=data.sys;

const mynewweather={

    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,

};
settemp(mynewweather);

    console.log(temp);
 } catch (error) {
    console.log(error)
    
 }
};
useEffect(()=>{
    getWeatherInfo();
},[]);
  


    return (<>
        <div className='wrap'>
            <div className='search'>
                <input type="Search"
                    placeholder='search...'
                    autoFocus
                    id="search"
                    className='searchTerm'
                    value={searchvalue}
                    onChange={(e)=>{
                        setsearchvalue(e.target.value)
                    }}
                />
                <button className='searchButton' type='button' onClick={getWeatherInfo}> Search</button>
            </div>
        </div>
        {
       <Wcard tempinfo={tempinfo} />
        }
    </>)
}

export default Temp;