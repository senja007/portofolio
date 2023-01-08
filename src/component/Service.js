import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import web from '../assets/img/web-developer.jpg'
import uiux from '../assets/img/uiux.jpg'
import CardGroup from 'react-bootstrap/CardGroup';
import '../App.css'

function Service() {
  return (
    <div>
      <h1>Jasa Service</h1>
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