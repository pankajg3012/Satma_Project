import React from 'react'
import Navbar from './Navbar'
import Imagesnavbar from './Imagesnavbar'
import   './Product.css'

function Product() {
  return (
    <>
    <div>
    <Navbar/>
     <Imagesnavbar/>
    <div className='bottom_img'>
    <img src="satma\src\assets\Images\productmap.png" alt="" />
     </div>
    
    </div>
    </>
  )
}

export default Product