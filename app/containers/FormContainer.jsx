import React, { Component } from 'react'
/* Import Components */
import CheckBox from '../components/disForm/CheckBox'
import Input from '../components/disForm/Input'
import TextArea from '../components/disForm/TextArea'
import Select from '../components/disForm/Select'
import Button from '../components/disForm/Button'

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newPickup: {
        name: '',
        email: '',
        age: '',
        condition: '',
        type: '',
        about: ''
      },

      conditionOptions: ['Working', 'Nonworking', 'Other'],
      typeOptions: ['Washer', 'Dryer', 'Fridge', 'Stove', 'Freezer', 'Other']

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit() {
    // Form submission logic
  }
  handleClearForm() {
    // Logic for resetting the form
  }
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input /> {/* Name of the user */}
        <Input /> {/* Input for Age */} 
        <Select /> {/* Appliance */}
        <CheckBox /> {/* List of appliances (eg. Washer, dryer) */}
        <TextArea /> {/* About the pickup */}
        <Button /> { /*Submit */ }
        <Button /> {/* Clear the form */}
      </form>
    );
  }
}
export default FormContainer;