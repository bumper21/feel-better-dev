import React from 'react';
import { Form } from 'react-bootstrap';

const JournalForm = props => {
  const handleSubmit = event => {
    event.preventDefault();

    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    props.onSubmit({
      feeling: formData.get("feeling"),
      body: formData.get("body")
    });

  };

  




}