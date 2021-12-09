import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './login.css'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { getLoggedIn } = useContext(AuthContext);

    const navigate = useNavigate();
    async function login(e) {
        e.preventDefault();

        try {
        const loginData = {
            email,
            password,
        };

        await axios.post("http://localhost:5000/auth/login", loginData, {
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

        {/* Login */}
        <div class="container" style={{marginTop: "50px"}}>
            <div class="row">
                <span class="col"></span>
                <div class="col-6 login" style={{fontSize: "35px", fontWeight: "bold", padding: "30px 40px"}}>Masuk
                    <div class="row">
                        <span class="col"></span>
                        <span class="col-6"></span>
                        <span class="col" style={{fontSize: "15px"}}><a href="/register" class="daftar" style={{color: "#FFC107", marginLeft: "auto"}}>Daftar</a></span>
                    </div>
                    <div class="mb-3 form">
                        <Form onSubmit={login} style={{fontSize: "20px"}}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className="input" type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                                <Form.Text className="text-muted" style={{fontSize: "15px"}}>contoh : email@rentall.com</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label label="Check me out"><a href="#" class="link" style={{color: "black"}}>Lupa Password?</a></Form.Label>
                            </Form.Group>
                            <Button variant="dark" type="submit" size="lg">Login</Button>
                        </Form>
                    </div>
                </div>
                <span class="col"></span>
            </div>
        </div>
        </>
    )
}
