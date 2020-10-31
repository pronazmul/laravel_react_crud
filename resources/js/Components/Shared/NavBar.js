import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/">Laravel-React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><NavLink className='text-light text-decoration-none' to="/">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink className='text-light text-decoration-none' to="/about">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink className='text-light text-decoration-none' to="/contract">Contract</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar