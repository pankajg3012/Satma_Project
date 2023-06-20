import React, { useState } from 'react'
import {Modal, Button} from "antd"
import   './Imagebtn.css'
import img1 from '../src/assets/Images/Sackweb.png';
import img2 from '../src/assets/Images/third_web.png';
import img3 from '../src/assets/Images/recieptweb.png';
import  img4 from '../src/assets/Images/transportweb.png'


function Images() {
    const [showModal, setShowModal]=useState(false);
  return (
    <>
    <div className='img_box'>
    <img src="src\assets\Images\transportweb.png" alt="" className='box_images_div' />
    <img src="src\assets\Images\sackweb.png" alt="" className='box_images_div' />
    <img src="src\assets\Images\recieptweb.png" alt="" className='box_images_div' />
    <img src="src\assets\Images\fourth.png" alt="" className='box_images_div' />
    <Button type="ghost" className='anchorpopup' onClick={()=>setShowModal(true)}>10+ More Images</Button>
    </div>
    
    <Modal title="Basic Modal"   className="modal_img" open={showModal} onCancel={() => setShowModal(false)}>
    
    <img src="src\assets\Images\transportweb.png" alt="" className='box_images_div1' />
    <img src="src\assets\Images\sackweb.png" alt="" className='box_images_div1' />
    <img src="src\assets\Images\recieptweb.png" alt="" className='box_images_div1' />
    <img src="src\assets\Images\fourth.png" alt="" className='box_images_div1' />
  </Modal>
    </>
  )
}

export default Images