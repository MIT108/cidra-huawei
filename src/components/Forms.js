import React from "react";

// reactstrap components
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

class Forms extends React.Component {
  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  type="name"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  type="name"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  type="name"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  type="name"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  type="name"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  type="name"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}

export default Forms;
