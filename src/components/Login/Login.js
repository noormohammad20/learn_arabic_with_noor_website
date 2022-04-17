import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/"

    if (user) {
        navigate(from, { replace: true })
    }

    const handleLogin = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }
    const navigateSignup = () => {
        navigate('/register')
    }
    return (
        <div>
            <h2 className='text-primary my-3'>Please Login</h2>
            <Form className='w-50 mx-auto' onSubmit={handleLogin}>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New in My Site ? <Link className='text-decoration-none' to='/signup' onClick={navigateSignup}>Please Signup</Link></p>
        </div>
    )
}

export default Login