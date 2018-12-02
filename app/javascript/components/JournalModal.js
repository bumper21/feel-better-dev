import React from 'react';
import { Component } from 'react';
import { Button, Modal, FormGroup, Radio, FormControl, Tooltip, OverlayTrigger } from 'react-bootstrap';
import JournalEntryForm from './JournalEntryForm';

class JournalModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
  
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
        <Button bsStyle="info" bsSize="large" onClick={this.handleShow}>
          Journal Better
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your Journal Entry</Modal.Title>
          </Modal.Header>
          <Modal.Body onSubmit={this.handleClose}>
            <JournalEntryForm  />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default JournalModal;