import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

class DeleteModal extends React.Component {
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
        onHide={(e) => this.props.handleDeleteModalClose()}
        size="sm"
        aria-labelledby="delete-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="delete-modal">
            Hapus Barang
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Barang "${this.state.name}" akan dihapus. Lanjutkan?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={(e) => this.props.handleDeleteModalClose()}>
            Ya
          </Button>
          <Button onClick={(e) => this.props.handleDeleteModalClose()}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

DeleteModal.propTypes = {
  item: PropTypes.object.isRequired,
  handleDeleteModalClose: PropTypes.func.isRequired,
}

export default DeleteModal;
