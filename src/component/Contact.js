import { Card, Form, FormControl } from "react-bootstrap";
import React, { Component } from "react";
import peeking from '../assets/img/peeking.png';

export const Contact = () => {
    return (
        <section className="contact" id="contactus">
            <div className="contact-box">
            <Card className="form-contact">
                <h1>Contact Us</h1>
                <div className="input-group">
                    <div className="inputUser">
                        <Form.Label className="label-contact">Username</Form.Label>
                        <input type="text"></input>
                    </div>
                    <div className="inputEmail">
                        <Form.Label className="label-contact">Email</Form.Label>
                        <input type="email"></input>
                    </div>
                    <div className="inputNumber">
                        <Form.Label className="label-contact">No Telepon</Form.Label>
                        <input type="text"></input>
                    </div>
                </div>
                <div className="input-group">
                    <div className="inputDesc">
                        <Form.Label className="label-contact">Description</Form.Label>
                        <textarea className="desc-box"></textarea>
                    </div>
                    <div className="send">
                        <button >Send</button>
                    </div>
                </div>
            </Card>
            <Card className="pict">
                <img className="peek" src={peeking} alt="peek"/>
            </Card>
            </div>
        </section>
    )
}

export default Contact;