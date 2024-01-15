import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'


function App() {
  

  return (
    <div className='flex flex-col'>
      <Home/>
      <About/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App
