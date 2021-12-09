import React from 'react'
import { Container, Navbar, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <>
        <Navbar className="bg-home" style={{fontSize:"14px"}}>
            <Container>
                {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
                <Navbar.Text><a href="/" className="header help">Download App</a></Navbar.Text>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text><a href="/" className="header help" style={{}}>Tentang RentAll</a></Navbar.Text>
                <Navbar.Text><a href="/" className="header help" style={{marginLeft: "20px"}}>Mulai jadi Renter</a></Navbar.Text>
                <Navbar.Text><a href="/" className="header help" style={{marginLeft: "20px"}}>Bantuan</a></Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header
