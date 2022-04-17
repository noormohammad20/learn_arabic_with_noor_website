import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Checkout = () => {
    const handleCheckOut = e => {
        e.preventDefault()
    }
    const handleCheckout = () => {
        toast('Congratulations!! Your Checkout Complete')
    }
    return (
        <div style={{ minHeight: '85vh' }}>
            <h1> CheckOut </h1>
            <Form onClick={handleCheckOut} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Control type="text" placeholder="First Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Control type="text" placeholder="Last Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                    <Form.Control type="text" placeholder="Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="countryName">
                    <Form.Control type="text" placeholder="Your Country Name" required />
                </Form.Group>
                <Button onClick={handleCheckout} variant="primary w-50" type="submit">
                    Complete CheckOut and Pay
                </Button>
            </Form>

            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Checkout