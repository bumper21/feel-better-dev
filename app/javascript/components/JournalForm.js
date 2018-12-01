import React from 'react';
import { FormGroup, OverlayTrigger, Radio, FormControl, Button, Tooltip} from 'react-bootstrap';

class JournalForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      feeling: null,
      body: '',
    };

    
  }


  // handleChange(e) {
  //   this.setState({ feeling: e.target.value})
  //   this.setState({ body: e.target.body });
  // }

  render() {
    const tooltip = (
      <Tooltip id="modal-tooltip"> 
        -5 is severly low, don't be afraid to ask for help! Zero is indifferent or numb. +5 means you are feeling a lot of positive emotion and functioning very well today.
      </Tooltip>
      );

    const feelingValues = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

    return (
      <form className="JournalEntryForm">
        <FormGroup>
          <p>How are you{' '}
            <OverlayTrigger overlay={tooltip}>
              <a href="#tooltip">feeling?</a>
            </OverlayTrigger>{' '}
          </p>
        </FormGroup>

        <FormGroup>
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
          <FormControl name="body" componentClass="textarea" placeholder="What are your thoughts? Try reading them outloud after writithem down." />
        </FormGroup>
        <Button>Save this Entry</Button>
    </form>

  )}
}

export default JournalForm;
