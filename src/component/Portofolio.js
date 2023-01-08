import { Card, CardGroup, Carousel, Col, } from "react-bootstrap";
import React, { useState } from "react";
import portof1 from "../assets/img/Project.jpg"

export const Portofolio = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section id="portofolio">
            <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} height={90} width={40}>
                <Carousel.Item>
                    <CardGroup>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                            <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                            <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                            <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                            <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                            <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                            <img src={portof1} height={300} width={240} />
                            </Card.Body>
                        </Card>
                    </Col>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Portofolio;