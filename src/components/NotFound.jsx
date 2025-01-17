import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const NotFound = function () {
    
    
    const navigate = useNavigate()



  return (
    <Container fluid className=" bg-body-secondary" style={{ height: "80vh" }}>
      <Row  className=" justify-content-center">
        <Col xs={12} md={6}>
          <Alert variant="warning">
            <p>La pagina che cerchi non e&apos; disponibile</p>
            <p>Clicca sul bottone qui sotto per tornare alla pagina Home</p>
          </Alert>
          <Button variant="outline-primary" onClick={()=> navigate('/')}>Clicca QUI!</Button>
        </Col>
      </Row>
    </Container>
  );
};
export default NotFound;
