import { Col, Container, Row } from "react-bootstrap";

const MeteoFooter = function () {
  return (
    <footer className=" bg-body-secondary">
      <Container fluid>
        <Row className=" justify-content-center"> 
          <Col xs={12} md={6} className="text-center">
            <p>Epimeteo@weather.com &copy;</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MeteoFooter;
