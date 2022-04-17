import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const Signup = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)

    const handleSignup = e => {
        e.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value

        createUserWithEmailAndPassword(email, password)

        if (password !== confirmPassword) {
            return alert('Password Not Matched')
        }
        navigate('/home')
    }
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div>
            <h2 className='text-primary my-3'>Please Register</h2>
            <Form className='w-50 mx-auto' onSubmit={handleSignup}>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button className='w-50' variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
            <p>Already have an Account? ? <Link className='text-decoration-none' to='/login' onClick={navigateLogin}>Please login</Link></p>
        </div>
    )
}

export default Signup