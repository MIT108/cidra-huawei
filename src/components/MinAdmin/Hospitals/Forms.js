
import React, {useState, useEffect} from 'react'


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
 
const Forms = () => {

  const initialValues = {Hname: "",
        email: "",
        registrationNum: "",
        address: "",
        kof: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() =>{
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) =>{
    const errors = {};
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (!values.Hname) {
      errors.Hname = "Hospital Name is Required"
    }
    if (!values.email) {
      errors.email = "email is Required"
    }else if(!regex.test(values.email)){
      errors.email = "email must contain @ to be a valid email"
    }
    if (!values.registrationNum) {
      errors.registrationNum = "Registration Number is Required"
    }
    if (!values.address) {
      errors.address = "address is Required"
    }
    if (!values.kof) {
      errors.kof = "Originl start date is Required"
    }
    return errors
  }
  return (
       <>
        <Form onSubmit={handleSubmit}>
           <Row>
             <Col md="6">
               <FormGroup>
                 <Input
                  id="exampleFormControlInput1"
                  placeholder="Hospital Name"
                  type="text"
                  name="Hname"
                  value={formValues.Hname}
                  onChange={handleChange}
                />
              </FormGroup>
              <p className='text-red'>{formErrors.Hname}</p>
            </Col>
            <Col md="6">
              <FormGroup >
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </FormGroup>
              <p className='text-red'>{formErrors.email}</p>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="Registration Number"
                  type="text"
                  name="registrationNum"
                  value={formValues.registrationNum}
                  onChange={handleChange}
                />
              </FormGroup>
              <p className='text-red'>{formErrors.registrationNum}</p>
            </Col>
            <Col md="6">
              <FormGroup>
                <Input
                  id="exampleFormControlInput1"
                  placeholder="address"
                  type="text"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                />
              </FormGroup>
              <p className='text-red'>{formErrors.address}</p>
            </Col>
            <Col md="3" className="">
              <Button color="primary" 
                ml="5"
                 >
                    {" "}
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    
  )
}
export default Forms;