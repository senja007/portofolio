import {Button, Card, CardGroup} from 'react-bootstrap';
import web from '../assets/img/web-developer.jpg'
import uiux from '../assets/img/uiux.jpg';
import '../App.css'

function Service() {
  return (
    <div>
      <h1>Layanan Kami</h1>
      <h6>services we provide include</h6>
      <div className='list-service'>
        <CardGroup style={{ width: '30rem' }}>
            <Card >
            <Card.Img variant="top" src={web} />
            <Card.Body>
                <Card.Title>Web Developer</Card.Title>
                  <Card.Text>
                    Website taek a
                  </Card.Text>
                <Button variant="primary">Go</Button>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={uiux} />
            <Card.Body>
                <Card.Title>UI/UX Desaigner</Card.Title>
                  <Card.Text>
                    Desaign karepmu wes
                  </Card.Text>
                <Button variant="primary">Go</Button>
            </Card.Body>
            </Card>
        </CardGroup>
      </div>
    </div>
  );
}

export default Service;