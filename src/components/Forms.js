import React, { useState } from "react";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
} from "reactstrap";
import { FormErrors } from "formValidation/FormError";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      registrationNum: "",
      address: "",
      kof: "",
      formErrors: {
        email: "",
        name: "",
        registrationNum: "",
        address: "",
        kof: "",
      },
      emailValid: false,
      nameValid: false,
      addressValid: false,
      formValid: false,
    };
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let addressValid = this.state.addressValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " email must contain @ and .";
        break;
      case "name":
        nameValid = value.length >= 50;
        fieldValidationErrors.name = nameValid
          ? "Name cannot be more than 50 characters"
          : "";
        break;
        case "address":
          addressValid = value.length === 0;
          fieldValidationErrors.address = addressValid
            ? "Name cannot be more than 50 characters"
            : "field address must be filled";
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.nameValid,
    });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
 }
  render() {
    return (
      <>
        <Form>
          <Row>
            <div className="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <Col md="6">
              <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  type="name"
                  name="name"
                  value={this.state.name}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Registration Number"
                  type="name"
                  name="registrationNum"
                  value={this.state.registrationNum}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="address"
                  type="name"
                  name="address"
                  value={this.state.address}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </FormGroup>
            </Col>
            {/* <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Logo"
                  type="file"
                  value={this.state.logo}
                />
              </FormGroup>
            </Col> */}
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Original Creation Date"
                  type="date"
                  name="kof"
                  value={this.state.kof}
                  onChange={(e) => {
                    this.validateForm(e);
                  }}
                />
              </FormGroup>
            </Col>
            <Col md="3" className="">
              <Button color="primary" 
                  onChange={(e) => {
                    this.handleChange(e);
                  }}>
                    {" "}
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default Forms;
