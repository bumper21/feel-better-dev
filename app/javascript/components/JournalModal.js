import React from 'react';
import { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
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
        <button id="journalButton" onClick={this.handleShow}>
          Journal Better
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
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