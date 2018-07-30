import React,{Component} from 'react';
import {FormGroup,ControlLabel,FormControl,HelpBlock} from 'react-bootstrap';

class FormExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangev = this.handleChangev.bind(this);
    this.handleChangee = this.handleChangee.bind(this);

    this.state = {
      value: '',
      email:''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }
  getValidationStateemail(){
    const email=this.state.email;
    const length = this.state.email.length;
    const emailRegex = /^\S+@\S+\.\S+$/;
    let bool=emailRegex.test(email);
    console.log(bool);
    if(length<1)
      return null;
    else if (bool)
      return 'success';
    else {
      return 'error';
    }
  }

  handleChangev(e) {
    this.setState({ value: e.target.value });
  }
  handleChangee(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    const emailRegex = new RegExp('/\S+@\S+\.\S+/');
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChangev}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <FormGroup validationState={this.getValidationStateemail()}>
          <ControlLabel>Email:</ControlLabel>
          <FormControl
            type="text"
            value={this.state.email}
            placeholder="Enter Email"
            onChange={this.handleChangee}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}
export default FormExample;
