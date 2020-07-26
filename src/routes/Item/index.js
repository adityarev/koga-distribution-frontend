import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Table } from 'react-bootstrap';

import Content from '../../components/Content';
import AddModal from './AddModal';
import DetailModal from './DetailModal';
import DeleteModal from './DeleteModal';

import { createItem } from '../../creators/entity';
import { items } from '../../dummies/entitylist';
import { currentTime } from '../../dummies/time';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addModal: {
        show: false,
        item: { ...createItem(null, null, null, null, currentTime) }
      },
      detailModal: {
        show: false,
        item: { ...createItem(null, null, null, null, currentTime) }
      },
      deleteModal: {
        show: false,
        item: { ...createItem(null, null, null, null, currentTime) }
      },
      items: items
    };
  }

  handleModalOpen = (modalName, itemId) => {
    const item = this.state.items.find(item => item.id === itemId) || createItem(null, null, null)
    this.setState({
      [modalName]: {
        show: true,
        item: { ...item }
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
            <Button variant="success" onClick={(e) => this.handleModalOpen("addModal", -1)}>
              Tambah
            </Button>
          </Row>
          <Row className="mt-1">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Barang</th>
                  <th>Jumlah</th>
                  <th>Pilihan</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.stockAmount}</td>
                    <td>
                      <Button
                        variant="info" size="sm"
                        onClick={(e) => this.handleModalOpen("detailModal", item.id)}
                      >
                        Detail
                      </Button> {' '}
                      <Button
                        variant="danger" size="sm"
                        onClick={(e) => this.handleModalOpen("deleteModal", item.id)}
                      >
                        Hapus
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Content>
        {this.state.addModal.show &&
          <AddModal
            item={{ ...this.state.addModal.item }}
            handleAddModalClose={() => this.handleModalClose("addModal")}
          />}
        {this.state.detailModal.show &&
          <DetailModal
            item={{ ...this.state.detailModal.item }}
            handleDetailModalClose={() => this.handleModalClose("detailModal")}
          />}
        {this.state.deleteModal.show &&
          <DeleteModal
            item={{ ...this.state.deleteModal.item }}
            handleDeleteModalClose={() => this.handleModalClose("deleteModal")}
          />}
      </>
    );
  }
}

Item.propTypes = {}

export default Item;
