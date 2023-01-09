import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import portof1 from "../assets/img/Project.jpg"

export const Portofolio = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max : 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="portofolio">
            <Container>
                <Row>
                    <Col size={12}>
                        <div  className="skill-bx wow zoomIn">
                            <h1>Our Portofolio</h1>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img height={200} width={120} src={portof1} alt="portof1" />
                                    <h4>Portofolio 1</h4>
                                </div>
                                <div className="item">
                                    <img height={200} width={120} src={portof1} alt="portof2" />
                                    <h4>Portofolio 2</h4>
                                </div>
                                <div className="item">
                                    <img height={200} width={120} src={portof1} alt="portof3" />
                                    <h4>Portofolio 3</h4>
                                </div>
                                <div className="item">
                                    <img height={200} width={120} src={portof1} alt="portof4" />
                                    <h4>Portofolio 4</h4>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Portofolio;