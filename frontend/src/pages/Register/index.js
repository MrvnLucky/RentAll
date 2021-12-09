import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { Form, Row, Col, Button } from "react-bootstrap";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const { getLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    async function register(e) {
        e.preventDefault();

        try {
        const registerData = {
            email,
            password,
            passwordVerify,
        };

        await axios.post("http://localhost:5000/auth/register", registerData, {
            withCredentials: true,
        });
        await getLoggedIn();

        navigate("/", { replace: true });
        } catch (err) {
        console.error(err);
        }
    }
    return (
        
        <>

        {/* Register */}
        <div class="container" style={{marginTop: "50px"}}>
            <div class="row">
                <span class="col"></span>
                <div class="col-6 login" style={{fontSize: "35px", fontWeight: "bold", padding: "30px 40px"}}>Daftar Sekarang
                    <div class="row">
                        <span class="col"></span>
                    </div>
                    <div class="mb-3 form">
                        <Form onSubmit={register} style={{fontSize: "20px"}}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control className="input" type="text" placeholder="ex: John Doe" required/>
                            </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="input" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required/>
                                <Form.Text className="text-muted" style={{fontSize: "15px"}}>contoh : email@rentall.com</Form.Text>
                            </Form.Group>
                        <Row className="mb-3"> 
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formBasicConfPassword">
                                    <Form.Label>Konfirmasi Password</Form.Label>
                                    <Form.Control className="input" type="password" placeholder="Konfirmasi Password" onChange={(e) => setPasswordVerify(e.target.value)} required/>
                            </Form.Group>
                        </Row>
                        <div className="d-grid gap-2">
                            <Button variant="dark" type="submit" size="lg">Daftar</Button>
                        </div>
                        </Form>
                    </div>
                </div>
                <span class="col"></span>
            </div>
        </div>
        </>
    )
}

