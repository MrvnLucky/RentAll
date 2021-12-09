import React from 'react'
import { Carousel, Row, Col, Card } from 'react-bootstrap'
import placeholder from '../../assets/placeholder1.jpeg'
import './home.css'

export default function Home() {
    return (
        <>
            
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={placeholder} alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={placeholder} alt="Second slide"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={placeholder} alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            
        <div class="Card">
            <Row xs={1} md={6} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col style={{marginBottom: "100px"}}>
                        <Card>
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Nama Barang</Card.Title>
                                <Card.Text>Rp. 500.000</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

        </>
    );
}