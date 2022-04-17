import React, { useEffect, useState } from 'react'
import Service from '../Service/Service'
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container my-5' id='services'>
            <h1 className='text-info fs-40 mt-5 mb-4 pt-4 '>Services</h1>
            <div className='service-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    )
}

export default Services