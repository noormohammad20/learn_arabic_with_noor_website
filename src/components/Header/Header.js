import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth'
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (

        <Navbar sticky='top' collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Learn Arabic</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-decoration-none text-light' onClick={handleSignOut} >Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header