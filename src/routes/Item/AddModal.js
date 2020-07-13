import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

import InputNumber from '../../components/InputNumber';

class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.item
    };
  }

  render() {
    return (
      <Modal
        show
        onHide={(e) => this.props.handleAddModalClose()}
        size="md"
        aria-labelledby="add-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="add-modal">
            Tambah Barang
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Nama
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Nama Barang" defaultValue={this.state.name}/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Jumlah
              </Form.Label>
              <Col sm={9}>
                <InputNumber defaultValue={this.state.quantity} onChange={(e) => { console.log('changed') }}/>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={(e) => this.props.handleAddModalClose()}>Tambah</Button>
          <Button variant="danger" onClick={(e) => this.props.handleAddModalClose()}>Batal</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddModal.propTypes = {
  item: PropTypes.object.isRequired,
  handleAddModalClose: PropTypes.func.isRequired,
}

export default AddModal;
