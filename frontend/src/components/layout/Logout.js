import React from 'react'
import { NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const Logout = () => {
    return (
        <>
        <nav class="navbar navbar-light bg-home">
            <div class="container">
                <div class="row">
                    <span class="col rentall navbar-brand mb-0 h1"><a href="/" style={{color:"white"}}>RentAll</a></span>
                    {/* <span class="col" style={{fontSize:"45px", marginTop: "6px"}}>|</span>
                    <span class="col" style={{fontSize: "36px", marginTop: "12px"}}>Login</span> */}
                    <div class="col" style={{marginTop: "auto", marginBottom: "auto"}}>
                        <NavDropdown title="Kategori" id="navbarDropdown" style={{color:"white"}}>
                            <NavDropdown.Item href="#action3">Audio</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Akomodasi</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Logistik</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    <div class="col" style={{marginTop: "auto", marginBottom: "auto"}}>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" style={{width: "500px"}}/>
                            <Button variant="outline-success" className="buttonSearch">Search</Button>
                        </Form>
                    </div>
                </div>
                <div class="row">
                    <span class="col" style={{fontSize: "18px", right: "83.68%"}}><a href="/register" class="help" style={{color: "white", fontWeight: "bold"}}>Daftar</a></span>
                    <span class="col" style={{fontSize: "18px"}}><a href="/login" class="help" style={{color: "white", fontWeight: "bold"}}>Login</a></span>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Logout
