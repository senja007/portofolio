import { Col } from "react-bootstrap";

export const TeamCard = ({ name, skill, pap }) => {
    return(
        <Col size={12} sm={6} md={4}>
            <div className="-imgbx">
                <img src={pap} alt="img"/>
                <div className="proj-txtx">
                    <h4>{name}</h4>
                    <span>{skill}</span>
                </div>
            </div>
        </Col>
    )
}