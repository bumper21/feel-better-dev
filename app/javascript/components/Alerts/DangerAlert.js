import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class DangerAlert extends Component {
  render() {
    return (
      <Alert bsStyle="danger">
        <strong> Error </strong> Your entry has not been saved. Please make sure you've written something and given "Feeling" a value.
      </Alert> 
    )
  }
}
