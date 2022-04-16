import React from 'react'
import './Service.css'
const Service = ({ service }) => {
    const { name, img, price, description } = service
    return (
        <div className='service' >
            <img className='w-100 h-50' src={img} alt="" />
            <h2>{name}</h2>
            <h5>{price}</h5>
            <p>{description}</p>
        </div>
    )
}

export default Service