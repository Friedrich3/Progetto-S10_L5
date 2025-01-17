import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const MeteoSearch = function () {
  const [search, setSearch] = useState("");

  return (
    <Container fluid>
      <Row className=" justify-content-center">
        <Col xs={12} md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="my-3 d-flex">
              <Button variant="outline-primary" type="submit">
                Search
              </Button>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default MeteoSearch;
