import React from 'react';
import { FormGroup, OverlayTrigger, Radio, FormControl, Button, Tooltip, Alert} from 'react-bootstrap';
import { JournalEntry } from '../packs/requests'



class JournalEntryForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      feeling: 0,
      body: ' '
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.createJournalEntry = this.createJournalEntry.bind(this);

    
  }

  createJournalEntry(event) {
    event.preventDefault();
    JournalEntry.create(this.state)
    console.log(this.state)

  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value})
    console.log(this.state)

  }

  render() {
    const tooltip = (
      <Tooltip id="modal-tooltip"> 
        -5 is severly low, don't be afraid to ask for help! Zero is indifferent or numb. +5 means you are feeling a lot of positive emotion and functioning very well today.
      </Tooltip>
      );

    const feelingValues = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

    return (
      <form className="JournalEntryForm" onChange={this.handleChange} onSubmit={this.createJournalEntry} >
        <FormGroup>
          <p>How are you{' '}
            <OverlayTrigger overlay={tooltip}>
              <a href="#tooltip">feeling?</a>
            </OverlayTrigger>{' '}
          </p>
        </FormGroup>

        <FormGroup >
          {
            feelingValues.map((value) => {
              return(
                <Radio name="feeling" key={value} value={value} inline>
                  {`${value}`}
                </Radio>
              )
            })
          }  
        </FormGroup>

        <FormGroup>
          <FormControl name="body" componentClass="textarea" placeholder="What are your thoughts? Try reading them outloud after writing them down." />
        </FormGroup>
        <Button type="submit" value="submit">Save this Entry</Button>
    </form>

  )}
}

export default JournalEntryForm;
