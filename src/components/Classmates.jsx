// function to fetch the API data
import React, { useEffect, useState } from 'react'

export default function Classmates() {
    const cardStyle = {
        width: '18rem'
    }

    const buttonStyle = {
        backgroundColor: '#6a4c93'
    }
    
    // setClassmates is a function that takes in classmates data
    const [classmates, setClassmates] = useState([])

    useEffect(() => {
        console.log('useEffect callback executed')
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data =>{
                let classmateData = data
                setClassmates(classmateData)
            })
    }, []) 

    function handleButtonClick(event){
        event.preventDefault()
        let newClassmates = event.target.button
        setClassmates(newClassmates)
        console.log('clicked')
    }

  return (
    <div className='row justify-content-center'>
        <button onClick={handleButtonClick} type="button" className="btn mt-4 text-white" name="button" style= {buttonStyle}>Next Classmate</button>
        
        {classmates.map((mates, idx) => {
            return(
                <div className="card mt-3" key={idx} style={cardStyle}>
                    <img src="https://picsum.photos/200" className="card-img-top p-2" alt="..."/>
                    <div className="card-body">
                    <h3 className="card-text text-center">{mates.first_name}</h3>
            </div>
          
        </div>
            )
        })}
        
    </div>
  )
}
