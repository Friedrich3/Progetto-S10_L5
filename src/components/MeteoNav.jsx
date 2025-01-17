import { Container, Nav, Navbar } from "react-bootstrap";

const MeteoNav = function () {
  return (
    <header>
      <Navbar expand="lg" className=" bg-body-secondary">
        <Container fluid>
          <Navbar.Brand >EpiMeteo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Oggi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default MeteoNav;
