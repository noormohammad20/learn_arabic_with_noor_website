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
        <div className='service ' >
            <img className='w-100' src={img} alt="" />
            <h2 className='text-info'>{name}</h2>
            <h5>{price}</h5>
            <p>{description}</p>
            <button className='btn btn-primary w-50' onClick={() => navigateToCheckout(id)}>Checkout</button>
        </div>
    )
}

export default Service