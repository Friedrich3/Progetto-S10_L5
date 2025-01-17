import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MeteoNav = function () {

const location = useLocation()

  return (
    <header>
      <Navbar expand="lg" className=" bg-body-secondary">
        <Container fluid>
          <Link to={"/"} className=" navbar-brand">
            EpiMeteo
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Item>
                    <Link to={"/"} className={ location.pathname === '/'? 'nav-link active':'nav-link' }>
                      Home
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to={"/next-days"} className={ location.pathname === '/next-days'? 'nav-link active':'nav-link' }>
                        Next Days
                    </Link>
                  </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default MeteoNav;
