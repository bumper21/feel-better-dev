import React from 'react'
import { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';

class ExerciseModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Feel Better
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Name of the Exercise here</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Exercise body here </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ExerciseModal;