import React from 'react'
import Navbar from './components/Navbar'
import Classmates from './components/Classmates'

export default function App() {
    return (
       <>
       <Navbar />
       <div className='container'>
            <Classmates />
       </div>
       </>
  )
}
