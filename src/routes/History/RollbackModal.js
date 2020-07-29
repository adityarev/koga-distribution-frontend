import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

class RollbackModal extends React.Component {
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
        onHide={(e) => this.props.handleRollbackModalClose()}
        size="md"
        aria-labelledby="rollback-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="rollback-modal">
            Batalkan Transaksi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Transaksi "${this.state.type}" dengan "${this.state.partner}"
            pada "${this.state.time}" akan dibatalkan. Lanjutkan?`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={(e) => this.props.handleRollbackModalClose()}>
            Ya
          </Button>
          <Button onClick={(e) => this.props.handleRollbackModalClose()}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

RollbackModal.propTypes = {
  transaction: PropTypes.object.isRequired,
  handleRollbackModalClose: PropTypes.func.isRequired,
}

export default RollbackModal;
