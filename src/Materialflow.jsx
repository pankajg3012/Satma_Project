import React from 'react'
import   './Material.css'
import matflowimag from '../src/assets/Images/satmagif1@3x.png'

function Materialflow() {
  return (
    <>
    <div className='material_container'>
    <div className='para_div'>
    <h1 className='h1_para'>Material Journey:</h1>
    <p className='material_para'>
      The Material Journey In Recycling is the process by which recyclable material are collected.sorted, and processed into new products.The Journey Begins when you put your recyclables in the bin.From there,they are collected by a waste hauler and taken to Material Recovery Facility (MRF),at the MRF,the recyclable are sorted by typed and baled.the bales are then sold to end-users,who use them to make new products.
    </p>
    </div>
    
    </div>
      <img src={matflowimag} alt="" className='flow-image' />


    </>
  )
}

export default Materialflow