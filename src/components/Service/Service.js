import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Service.css'
const Service = ({ service }) => {
    const { name, id, img, price, description } = service
    const navigate = useNavigate()
    const navigateToCheckout = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service me-5 card-body d-flex  flex-column' >
            <img className='img w-100' src={img} alt="" />
            <h2 className='service-name text-success'>{name}</h2>
            <h5 className='service-price'>{price}</h5>
            <p>{description}</p>
            <button style={{ marginTop: 'auto' }} className='checkout-btn mx-auto ' onClick={() => navigateToCheckout(id)}>Checkout</button>
        </div>
    )
}

export default Service