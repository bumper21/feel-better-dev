import React from 'react';
import { FormGroup, OverlayTrigger, Button, FormControl, Tooltip } from 'react-bootstrap';
import SuccessAlert from './Alerts/SuccessAlert';
import { JournalEntry } from '../packs/requests'



class JournalEntryForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      feeling: 0,
      body: ' ',
      alert_message: null
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.createJournalEntry = this.createJournalEntry.bind(this); 
  }

  createJournalEntry(event) {
    event.preventDefault();
    JournalEntry.create(this.state)
    this.setState({alert_message: "success"})
    console.log(this.state.alert_message)
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
    console.log(e.target.name, e.target.value)
  }

  render() {
    const tooltip = (
      <Tooltip id="modal-tooltip"> 
        -5 is severly low, don't be afraid to ask for help! Zero is indifferent or numb. +5 means you are feeling a lot of positive emotion and functioning very well today.
      </Tooltip>
      );

    const feelingValues = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

    return (
      <div>

        {this.state.alert_message == "success" ? <SuccessAlert /> : null}

        <form id="journalEntryForm" onChange={this.handleChange} onSubmit={this.createJournalEntry} >

          <FormGroup id="journalEntryFeelingForm">
            <p>How are you</p>{' '}
            <OverlayTrigger overlay={tooltip}>
              <a id="tooltipLink" href="#tooltip">feeling?</a>
            </OverlayTrigger>{' '}
            <select name="feeling" defaultValue={0}>
              {
                feelingValues.map((value) => {
                  return(
                    <option value={value} key={value}>
                      {`${value}`}
                    </option>
                  )
                })
              }
            </select>
          </FormGroup>

          <FormGroup>
            <FormControl id="placeHolder" name="body" componentClass="textarea" rows={10} placeholder="What are your thoughts? Try reading them outloud after writing them down." />
          </FormGroup>

          <Button id= "journalSubmitBtn" type="submit" value="submit"> </Button>

        </form>
      </div>
  )}
}

export default JournalEntryForm;
