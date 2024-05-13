import React from 'react'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import Product from './Product'
import Section from './Section'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <About/>
      <Product/>
      <Section/>
    </div>
  )
}

export default App
