import React from 'react';
import { Component } from 'react';
import { Button, Modal, FormGroup, Label, Radio, ControlLabel, FormControl, Tooltip, Popover, OverlayTrigger } from 'react-bootstrap';
import { JournalEntry } from '../packs/requests'

class JournalModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      journal_entry: []
    };

  }

  handleClose() {
    this.setState({ show: false });
    
  }

  handleShow() {
    this.setState({ show: true });
    
  }

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );

    const tooltip = (
    <Tooltip id="modal-tooltip"> 
      -5 is severly low, don't be afraid to ask for help! Zero is indifferent or numb. +5 means you are feeling a lot of positive emotion and functioning very well today.
    </Tooltip>
    );

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
            <form className="JournalEntryFrom">
              <FormGroup>
                <p>How are you{' '}
                  <OverlayTrigger overlay={tooltip}>
                    <a href="#tooltip">feeling?</a>
                  </OverlayTrigger>{' '}
                </p>
                <Radio name="radioGroup" inline>
                  -5
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  -4
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  -3
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  -2
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  -1
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  0
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  1
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  2
                </Radio>{' '}
                <Radio name="radioGroup" inline>
                  3
                </Radio>
                <Radio name="radioGroup" inline>
                  4
                </Radio>
                <Radio name="radioGroup" inline>
                  5
                </Radio>

                <FormControl componentClass="textarea" placeholder="What are your thoughts? Try reading them outloud after writing them down." />
              </FormGroup>
              <Button type="submit">Save this Entry</Button>
            </form>
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