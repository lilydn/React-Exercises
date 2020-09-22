import React from 'react';
import FormTextArea from './FormTextArea';
import './App.css';

class Form extends React.Component {

  render () {
    return (
      <div className="form">
        <FormTextArea />
      </div>
    );
  }
}

export default Form;