import React, { useContext, useEffect } from 'react'

const Card = ({data}) =>{


    const {current,location} = data;
    console.log(data)

  return (
    <div className='container d-flex justify-content-center my-5 '>
        <div className="card w-50 text-center">
            <div className='container'>
                <img className='card-img-top h-10 w-25 m-auto img-fluid' src={current.condition.icon} alt={`img-${current.condition.icon}`}/>
                <div className='d-inline-flex flex-column'>
                   <span>{current.condition.text}</span>
                   <span>Temp: {current.temp_c}°</span>
                   <span>Hume: {current.humidity}% </span>
                </div>
            </div>
            <div className="card-body">
                <div className="card-title fs-1">{location.name} ({location.country})</div>
            </div>
        </div>
    </div>
  )
}

export default Card