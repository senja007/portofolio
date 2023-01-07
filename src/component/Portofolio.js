import { Card, CardGroup, Carousel, Col, } from "react-bootstrap";
import React, { useState } from "react";
import portof1 from "../assets/img/project.jpg"

const Portofolio = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} height={90} width={40}>
        <Carousel.Item>
            <CardGroup>
            <Col md={2}>
                <Card>
                    <Card.Body>
                    <img src={portof1} height={300} width={240} />
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2}>
                <Card>
                    <Card.Body>
                    <img src={portof1} height={300} width={240} />
                    </Card.Body>
                </Card>
            </Col>
            <Col md={2}>
                <Card>
                    <Card.Body>
                    <img src={portof1} height={300} width={240} />
                    </Card.Body>
                </Card>
            </Col>
            </CardGroup>
        </Carousel.Item>
        <Carousel.Item>
            <Col md={4}>
                <Card>
                    <Card.Body>
                    <img src={portof1} height={300} width={240} />
                    </Card.Body>
                </Card>
            </Col>
        </Carousel.Item>
        <Carousel.Item>
                <Card>
                    <Card.Body>
                    <img src={portof1} height={300} width={240} />
                    </Card.Body>
                </Card>
        </Carousel.Item>
        <Carousel.Item>
            <Col md={4}>
                <Card>
                    <Card.Body>
                    <img src={portof1} height={300} width={240} />
                    </Card.Body>
                </Card>
            </Col>
        </Carousel.Item>
        <Carousel.Item>
            <Col md={4}>
                <Card>
                    <Card.Body>
                    <img src={portof1} height={300} width={240} />
                    </Card.Body>
                </Card>
            </Col>
        </Carousel.Item>
    </Carousel>
  );
}

export default Portofolio;