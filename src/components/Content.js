import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

const Content = (props) => {
  return(
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={8} sm={10} xs={11}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
}

export default Content;