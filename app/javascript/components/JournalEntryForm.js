import React from 'react';
import { FormGroup, OverlayTrigger, Button, FormControl, Tooltip } from 'react-bootstrap';
import SuccessAlert from './Alerts/SuccessAlert';
import DangerAlert from './Alerts/DangerAlert';
import { JournalEntry } from '../packs/requests';
import './JournalEntryStyling/JournalAlert.css';



class JournalEntryForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      feeling: null,
      body: ' ',
      alert: null,
      errors: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.createJournalEntry = this.createJournalEntry.bind(this); 
  }

  createJournalEntry(event) {
    event.preventDefault();
    const journal_entry = { feeling: this.state.feeling, body: this.state.body }
  
    JournalEntry.create(journal_entry).then(res => {
      // console.log(res)
      if (res.status == "error") {
        this.setState({errors: res.message})
        this.setState({alert: "danger"})
        // console.log(this.state.errors)
      } else if (res.error == "Unauthorized") {
        this.setState({errors: res})
        this.setState({alert: "danger"})
      } else {
        this.setState({alert: "success"})
      }
    })
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
    // console.log(e.target.name, e.target.value)
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
        <div id="journalAlert">
        {this.state.alert == "success" ? <SuccessAlert /> : null}
        {this.state.alert == "danger" ? <DangerAlert errors={this.state.errors} /> : null}
        </div>

        <form id="journalEntryForm" onChange={this.handleChange} onSubmit={this.createJournalEntry} >

          <FormGroup id="journalEntryFeelingForm">
            <p>How are you</p>{' '}
            <OverlayTrigger overlay={tooltip}>
              <a id="tooltipLink" href="#tooltip">feeling?</a>
            </OverlayTrigger>{' '}
            <select name="feeling" >
              <option defaultValue="select" >
                
              </option>
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

          <Button id="journalSubmitBtn" type="submit" value="submit"> </Button>

        </form>
      </div>
  )}
}

export default JournalEntryForm;
