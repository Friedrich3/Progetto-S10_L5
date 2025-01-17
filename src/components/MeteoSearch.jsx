/* eslint-disable react/prop-types */

import { Button, Col, Container, Form, Row } from "react-bootstrap";

const MeteoSearch = function (props) {
 

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
                value={props.search}
                onChange={(event) => {
                  props.setSearch(event.target.value);
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
