/* eslint-disable react/prop-types */

import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const MeteoSearch = function (props) {
    const [insideSearch, setInsideSearch] = useState('')
 

  return (
    <Container fluid>
      <Row className=" justify-content-center">
        <Col xs={12} md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              props.setSearch(insideSearch)
            }}
          >
            <Form.Group className="my-3 d-flex">
              <Button variant="outline-primary" type="submit">
                Search
              </Button>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={insideSearch}
                onChange={(event) => {
                    setInsideSearch(event.target.value);
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
