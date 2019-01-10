import React from 'react';
import { Alert } from 'react-bootstrap';

const DangerAlert = props => (
   
    <Alert bsStyle="danger">
      <ul>
        { props.errors.error !== undefined ?
        ( props.errors.error.map(error => (

          <li key={error}>
            Please Sign in
          </li>
        )
        )) : null }
      </ul>

      <ul>
        { props.errors.body !== undefined ?
         ( props.errors.body.map(error => (
          <li key={error}>
            Journal Entry {error}
          </li>
          )
        )) : null }

        {props.errors.feeling !== undefined ? 
          ( props.errors.feeling.map(error => (
            <li key={error}>
              Feeling rating: {error}
            </li>
          )
        )) : null }
      
      </ul>
    </Alert> 
)


export default DangerAlert;