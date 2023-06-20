import { useState } from 'react'
import Sidebar from './Sidebar'
import Product from './Product'
import Materialflow from './Materialflow'
import Images from './Images'
import Emission from './Emission'
import  './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="parent">
    <Sidebar/>
    <div className='Sub_navbar'>
    <Product/>
    <Materialflow/>
        <Images/>
        <Emission/>
  
    </div>
    </div>
    </>
  )
}

export default App
