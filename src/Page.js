import React from 'react'
import "./Page.css";
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterIcon from '@mui/icons-material/Water';



function Page(props) {
  return (
    <div className='main'>
     <p>{props.city}</p>
      <img src="https://th.bing.com/th/id/R.68d0a40ca6ef9c5ca429a79338b9636f?rik=uzyfrdKvVm%2fHMg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fRcA%2fEXy%2fRcAEXynji.png&ehk=r28uHZka6CKiMOJ0nod261NPq9L4BXqyHD3YCpX4PPk%3d&risl=&pid=ImgRaw&r=0" alt="/"/>
      <div className='info'>
      <div className='temp'>
      <DeviceThermostatIcon/>
      <p>Temperature</p>
   <div className='temp_info'>
    <p>{props.temperature}</p>
   </div>

      </div>
      <div className='windspeed '>
      <AirIcon/>
      <p>Windspeed</p>
      <div className='wind_info'>
    <p>{props.wind}</p>
   </div>
      </div>
      <div className='humidity'>
      <WaterIcon/>
      <p>Humidity</p>
      <div className='humid_info'>
    <p>{props.wind}</p>
   </div>
      </div>
        </div> 
    

    </div>

   
  )
}

export default Page
