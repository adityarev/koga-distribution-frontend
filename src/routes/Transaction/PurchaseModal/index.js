import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';

import InputNumber from '../../../components/InputNumber';

class PurchaseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      form: {
        itemId: null,
        itemName: null,
        quantity: 0
      }
    };
  }

  render() {
    return (
      <Modal
        show
        onHide={(e) => this.props.handlePurchaseModalClose()}
        size="md"
        aria-labelledby="purchase-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="purchase-modal">
            Beli Barang
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Nama
              </Form.Label>
              <Col sm={9}>
                <Form.Control as="select">
                  <option>Susu</option>
                  <option>Kerupuk</option>
                  <option>Kue</option>
                  <option>Buah</option>
                  <option>Sayur</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Jumlah
              </Form.Label>
              <Col sm={9}>
                <InputNumber defaultValue={this.state.form.quantity}/>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={(e) => this.props.handlePurchaseModalClose()}>Beli</Button>
          <Button variant="danger" onClick={(e) => this.props.handlePurchaseModalClose()}>Batal</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

PurchaseModal.propTypes = {
  items: PropTypes.array.isRequired,
  handlePurchaseModalClose: PropTypes.func.isRequired
}

export default PurchaseModal;
