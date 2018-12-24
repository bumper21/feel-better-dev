import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class SuccessAlert extends Component {
  render() {
    return (
      <Alert bsStyle="success">
        <strong> Thank you! </strong> Your entry has been saved.
      </Alert> 
    )
  }
}
