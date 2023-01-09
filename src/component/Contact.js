import { Card, Form, InputGroup } from "react-bootstrap";

export const Contact = () => {
    return (
        <section className="contact" id="contactus">
            <Card className="form-contact">
                <h1>Contact Us</h1>
                <div className="input-group">
                    <div className="inputUser">
                        <Form.Label className="label-contact">Username</Form.Label>
                        <Form.Control type="text" />
                    </div>
                    <div className="inputEmail">
                        <Form.Label className="label-contact">Email</Form.Label>
                        <Form.Control type="email" />
                    </div>
                    <div className="inputNumber">
                        <Form.Label className="label-contact">No Telepon</Form.Label>
                        <Form.Control type="number" />
                    </div>
                </div>
                <div>
                    <Form.Label className="label-contact">Description</Form.Label>
                    <Form.Control  className="inputDesc" type="paragraph" />
                </div>
            </Card>
        </section>
    )
}

export default Contact;