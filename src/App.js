

import axios from "axios";
import { useState } from "react";
import "./App.css"
import Page from "./Page";
import {Routes, Route,Link}from "react-router-dom"; 

function App() {
  const [city, setCity]= useState("");
  const [info, setInfo] = useState([{}]);
  const [temperature, setTemp]= useState();
  const [humid, setHumid]= useState();
  const [wind, setWind]= useState();

  const apiKey ="f9af0a0b647a07df0bcbe68d2ac22c4e";
  const handlechange =(e) =>
  {
      console.log(e.target.vlaue)
      setCity(e.target.value)
  }

  const handleSearch=() =>
  {
    console.log(city)
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey
    axios.get(url).then((value)=>{
      setInfo(value.data)
     // console.log(info.main)
      setTemp(info?.main?.temp)
      setHumid(info?.main?.humidity)
      setWind(info?.wind?.speed)
      console.log(humid)
      console.log(temperature)
      console.log(wind)
      console.log(city)
      
    }).catch(error => {
      console.log('Error: ', error)
    })


   
   //   console.log(temp)
  
    }
  
  return (
        <>
      
        <div className='conatiner search_bar'>
          <div className="item">
            <div className="Logo">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/006/414/026/small/thundercloud-pixel-cloud-with-rain-cumulus-white-cluster-with-gray-gradient-with-heavy-rainfall-rainy-season-and-autumn-vector.jpg" alt="/"></img>
              <p>Weathery</p>
            </div>
            <p>Search the city to know the weather</p>
    
            <input className="form-control me-2" style = {{width:"200px"}}type="search" placeholder="Search" aria-label="Search" onChange ={handlechange} vlaue={city} />
            <Link to="/info">
            <button className="btn btn-outline-success" style={{marginTop:"20px"}}type="submit" onClick={handleSearch}>Search</button>
            </Link>
            
          </div>
 
        </div>

        <Routes>
          <Route path={"/info"} element={<Page />} />
        </Routes>
{/* <Page/> */}
     
       
        </>
  );
}

export default App;
