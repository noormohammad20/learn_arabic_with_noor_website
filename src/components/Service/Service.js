import React from 'react'

const Service = ({ service }) => {
    const { name, img, price, description } = service
    return (
        <div>
            <img className='w-100 h-50' src={img} alt="" />
            <h2>{name}</h2>
            <h5>{price}</h5>
            <p>{description}</p>
        </div>
    )
}

export default Service