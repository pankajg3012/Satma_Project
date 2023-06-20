import React from 'react'
import  './Imagenav.css'

function Imagesnavbar() {
  return (
    <div className='img_nav'>
    <div className="img1">
    <img src="https://i.postimg.cc/nhzYk2XH/image8-2x.png" alt="Collection_img" className='img_sub' />
    <span>Collection</span>
    </div>
    <div className="img2">
    <img src="https://i.postimg.cc/J7F104jP/Segregation.png" alt="Segregation_img" className='img_sub'/>
    <span>Segregation</span>
    </div>
    <div className="img3">
    <img src="https://i.postimg.cc/Hx29zh9k/Recycling.png" alt="Recycling_img" className='img_sub'/>
    <span>Recycling</span>
    </div>
    <div className="img4">
    <img  src="https://i.postimg.cc/524Yq2kL/Product-Scan.png" alt="productscan" className='img_sub1'  />
    <span>Product</span>
    </div>

    </div>
  )
}

export default Imagesnavbar