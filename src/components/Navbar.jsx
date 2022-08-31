import React from 'react'

export default function Navbar() {
    const bgColor = {
        backgroundColor: '#03045e'
    }
    
  return (
    <nav className="navbar" style={bgColor}>
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1 text-white">Kekambas Peeps 4 Lyfe</span>
        </div>
    </nav>
  )
}
