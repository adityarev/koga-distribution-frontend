import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';

import InputNumber from '../../../components/InputNumber';

const createItem = (id, name, price, quantity) => {
  return { id, name, price, quantity };
}

const createPayment = (type, value, label) => {
  return { type, value, label };
}

class SellModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      form: {
        items: [],
        outlet: null,
        paymentType: null,
        discount: null
      }
    };
  }

  handlePaymentTypeChange = (event) => {
    const { value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        paymentType: value
      }
    });
  }

  handleItemAdd = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        items: [
          ...this.state.form.items,
          createItem(0, "-Pilih-", 0, 1)
        ]
      }
    });
  }

  handleItemChange = (index, newItem) => {
    this.setState({
      form: {
        ...this.state.form,
        items: this.state.form.items.map((item, i) => (
          i === index ? ({ ...item, ...newItem }) : item
        ))
      }
    }, () => {
      this.setState({
        form: {
          ...this.state.form,
          items: this.state.form.items.filter(item => (item.quantity > 0))
        }
      })
    });
  }

  handleItemDelete = (index) => {
    this.setState({
      form: {
        ...this.state.form,
        items: this.state.form.items.filter((item, i) => (i !== index))
      }
    });
  }

  render() {
    return (
      <Modal
        show
        onHide={(e) => this.props.handleSellModalClose()}
        size="md"
        aria-labelledby="sell-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="sell-modal">
            Jual Barang
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={12}>
                Keranjang
              </Form.Label>
              <Col sm={12}>
                {this.state.form.items.map((item, i) => (
                  <Form.Group key={i} as={Row}>
                    <Col className="mb-2" sm={12}>
                      <Form.Control
                        as="select"
                        defaultValue={0}
                        onChange={(e) => {
                          const { value } = e.target;
                          const newItemId = Number(value);
                          this.handleItemChange(i, this.props.items.find(item => (item.id === newItemId)));
                        }}
                      >
                        {this.props.items.map((selectItem, i) => (
                          <option key={i} value={selectItem.id}>{selectItem.name}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col sm={12}>
                      <Row>
                        <Col sm={5}>
                          <InputNumber
                            defaultValue={item.quantity}
                            onChange={(value) => this.handleItemChange(i, { quantity: value })}
                          />
                        </Col>
                        <Col sm={7}>
                          {`Rp.${item.quantity * item.price},-`}
                        </Col>
                      </Row>
                    </Col>
                  </Form.Group>
                ))}
                <Button variant="primary" size="sm" onClick={this.handleItemAdd}>
                  <Plus/> Tambah
                </Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Partner
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Pembayaran
              </Form.Label>
              <Col sm={9}>
                <Form.Control as="div" onChange={this.handlePaymentTypeChange}>
                  {[
                    createPayment("cash", "CASH", "Tunai"),
                    createPayment("credit", "CREDIT", "Kredit")
                  ].map((payment, i) => (
                    <Form.Check key={i} inline type="radio"
                      id={`payment-${payment.type}`}
                      value={payment.value}
                      label={payment.label}
                      checked={this.state.form.paymentType === payment.value}
                    />
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Diskon
              </Form.Label>
              <Col sm={9}>
                <Form.Control as="select">
                  <option>Diskon 10%</option>
                  <option>Beli 1 gratis 1</option>
                  <option>Gratis piring cantik</option>
                </Form.Control>
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={(e) => this.props.handleSellModalClose()}>Beli</Button>
          <Button variant="danger" onClick={(e) => this.props.handleSellModalClose()}>Batal</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

SellModal.propTypes = {
  items: PropTypes.array.isRequired,
  handleSellModalClose: PropTypes.func.isRequired
}

export default SellModal;
