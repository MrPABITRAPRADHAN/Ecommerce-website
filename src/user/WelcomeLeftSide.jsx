import Card from 'react-bootstrap/Card';

function WelcomeLeftSide() {
  return (
    <Card style={{ width: '18rem', lineHeight: '25px', backgroundColor:"transparent", margin:"40px 0px", border:"none"}} >
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Welcome to</Card.Subtitle>
        <Card.Title>Ekart</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Card.Link href="#">Shop Now</Card.Link>
        
      </Card.Body>
    </Card>
  );
}

export default WelcomeLeftSide;