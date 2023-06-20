import React from 'react'
import   './Emission.css'
import HomeImage from "../src/assets/Images/Home.png";


function Emission() {
  return (
    <>
    
   
    <img src={HomeImage}  alt="Emission_home_image" className='Homeimg' />

    <div className="Main_Card_Container">



<div  className='Box1'>

    <div className="card">
  <div className="card_heading">
<h1> Carbon Saved</h1>
  </div>
  <div className="card_body">
 <p className="p1">7.20 tons</p>
  </div>
</div>



<div className="card">
  <div className="card_heading">
<h1> Water Saved vs Virgin Equivalent</h1>
  </div>
  <div className="card_body">
 <p className="p1">7.20 m3</p>
  </div>
</div>
</div>


<div className='Box2'>
<div className="card">
  <div className="card_heading">
<h1> Total Waste Used</h1>
  </div>
  <div className="card_body">
 <p className="p1">5 tons</p>
  </div>
</div>
<div className="card">
  <div className="card_heading">
<h1> Electricity Saved Vs Virgin Equiv..</h1>
  </div>
  <div className="card_body">
 <p className="p1">194,867 MJ</p>
  </div>
</div>
</div>
</div>
    
    </>
  )
}

export default Emission