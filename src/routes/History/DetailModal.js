import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

class DetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.transaction
    };
  }

  render() {
    return (
      <Modal
        show
        onHide={(e) => this.props.handleDetailModalClose()}
        size="md"
        aria-labelledby="detail-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="detail-modal">
            Detail Transaksi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Partner
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" defaultValue={this.state.partner} disabled/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Pembayaran
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" defaultValue={this.state.paymentType} disabled/>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => this.props.handleDetailModalClose()}>Tutup</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

DetailModal.propTypes = {
  transaction: PropTypes.object.isRequired,
  handleDetailModalClose: PropTypes.func.isRequired,
}

export default DetailModal;
