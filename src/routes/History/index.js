import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Table } from 'react-bootstrap';

import Content from '../../components/Content';
import DetailModal from './DetailModal'
import RollbackModal from './RollbackModal';

import { transactions } from '../../dummies/entitylist';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailModal: {
        show: false,
        transaction: null
      },
      rollbackModal: {
        show: false,
        transaction: null
      },
      transactions: [...transactions]
    };
  }

  handleModalOpen = (modalName, transaction) => {
    this.setState({
      [modalName]: {
        show: true,
        transaction: { ...transaction }
      }
    });
  }

  handleModalClose = (modalName) => {
    this.setState({
      [modalName]: {
        ...this.state[modalName],
        show: false
      }
    })
  }

  render() {
    return (
      <>
        <Content>
          <Row className="mt-3">
            <Button variant="primary" onClick={(e) => console.log("Update..")}>
              Perbarui
            </Button>
          </Row>
          <Row className="mt-1">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Jenis Transaksi</th>
                  <th>Partner</th>
                  <th>Pembayaran</th>
                  <th>Waktu</th>
                  <th>Admin</th>
                  <th>Pilihan</th>
                </tr>
              </thead>
              <tbody>
                {this.state.transactions.map((transaction, i) => (
                  <tr key={i}>
                    <td>{transaction.id}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.partner}</td>
                    <td>{transaction.paymentType}</td>
                    <td>{transaction.time}</td>
                    <td>{transaction.user}</td>
                    <td>
                      <Button
                        variant="info" size="sm"
                        onClick={(e) => this.handleModalOpen("detailModal", transaction)}
                      >
                        Detail
                      </Button> {' '}
                      <Button
                        variant="danger" size="sm"
                        onClick={(e) => this.handleModalOpen("rollbackModal", transaction)}
                      >
                        Batalkan
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Content>
        {this.state.detailModal.show && 
          <DetailModal
            transaction={{ ...this.state.detailModal.transaction }}
            handleDetailModalClose={() => this.handleModalClose("detailModal")}
          />}
        {this.state.rollbackModal.show &&
          <RollbackModal
            transaction={{ ...this.state.rollbackModal.transaction }}
            handleRollbackModalClose={() => this.handleModalClose("rollbackModal")}
          />}
      </>
    );
  }
}

History.propTypes = {}

export default History;
