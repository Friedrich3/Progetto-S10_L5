import { Col, Container, Row } from "react-bootstrap";

const MeteoFooter = function () {
  return (
    <footer className=" bg-body-secondary">
      <Container fluid className="py-2">
        <Row className=" justify-content-center"> 
          <Col xs={12} md={6} className="text-center">
            <ul className="d-flex list-unstyled justify-content-between">
                <li>Chi Siamo</li>
                <li>Contatti</li>
                <li>Policies</li>
                <li>Help</li>

            </ul>
            <p>Epimeteo@weather.com &copy;</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MeteoFooter;
