import React from 'react';
import { Component } from 'react';
import { Button, Modal, FormGroup, Radio, FormControl, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { JournalEntry } from '../packs/requests';
import JournalForm from './JournalForm';

class JournalModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      journal_entry: []
    };

    this.createJournalEntry = this.createJournalEntry.bind(this);

  }

  handleClose() {
    this.setState({ show: false });
    
  }

  handleShow() {
    this.setState({ show: true });
    
  }

  createJournalEntry(params) {
    JournalEntry.create(params).then(journal_entry => {
      if (journal_entry.errors) {
        this.setState({ errors: journal_entry.errors });
      } else {
        this.props.history.push(`/journal_entries/${journal_entry.id}`);
      }
    });
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
          <Modal.Body>
            <JournalForm onSubmit={ this.createJournalEntry } />
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