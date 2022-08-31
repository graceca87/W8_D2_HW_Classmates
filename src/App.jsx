import React from 'react'
import Navbar from './components/Navbar'
import Classmates from './components/Classmates'

export default function App() {
    return (
       <>
       <Navbar />
       <div class='container'>
        <Classmates />
       </div>
       </>
  )
}
