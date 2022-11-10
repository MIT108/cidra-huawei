import React, { useState, useEffect } from "react";
import NotificationManager from "react-notifications/lib/NotificationManager";

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
  Card,
  CardHeader,
} from "reactstrap";

import AdminPagesHeader from "components/Headers/AdminPagesHeader"

const Forms = () => {
  const initialValues = {
    name: "",
    weight: "",
    height: "",
    age: "",
    comp: "",
    temp: "",
    bp:""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is Required";
    }
    if (!values.weight) {
      errors.weight = "Weight is Required";
    }
    if (!values.height) {
      errors.height = "height is Required";
    }
    if (!values.age) {
      errors.age = "Age is Required";
    }
    if (!values.temp) {
      errors.temp = "Temparature field must be filled";
    }
    if (!values.bp) {
      errors.bp = "blood presure field cannot be empty";
    }
    if (!values.comp) {
      errors.comp = "Complain field cannot be empty";
    }
    return errors;
  };

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  // const addAdmin = () => {
  //   var data = {
  //     email: email,
  //     name: name,
  //   };
  //   addAdmin(data)
  //     .then((response) => {
  //       NotificationManager.success(response.data.message);
  //       setEmail("");
  //       setHname("");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       if (error.response) {
  //         NotificationManager.error(error.response.data.errors[0].msg);
  //       } else {
  //         NotificationManager.warning("Server Error");
  //       }
  //     });
  // };

  // useEffect(() => {
  //   setHname(Hname.replace(/[^a-zA-Z ]/g, ""));
  //   if (Hname.split(" ").length - 1 > 1) {
  //     setHname(Hname.slice(0, -1));
  //     console.log(Hname);
  //   } else {
  //     let regex = / /g;
  //     var newEmail = Hname.toLowerCase();
  //     newEmail = newEmail.replace(regex, ".");
  //     newEmail = newEmail + "@minsante.com";
  //     setEmail(newEmail);
  //   }
  // }, [Hname]);
  return (
    <>
    <AdminPagesHeader/>
      <Card style={{ width: "55rem", margin:"auto", marginTop:"-5rem" }}>
        <CardHeader className="m-auto color-blue fs-12">Consulting a Patient</CardHeader>
        <Form
          style={{ width: "85%", marginLeft: "35%", marginTop:"3%", marginBottom:"3%" }}
        >
          <Col md="6">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="Patient Name"
                type="text"
                name="name"
                value={formValues.name}
                onChange={(e) => handleChange()}
              />
            </FormGroup>
            <p className="text-red">{formErrors.name}</p>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="Age"
                type="text"
                name="age"
                value={formValues.age}
                onChange={handleChange}
              />
            </FormGroup>
            <p className="text-red">{formErrors.age}</p>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="Weight"
                type="text"
                name="weight"
                value={formValues.weight}
                onChange={handleChange}
              />
            </FormGroup>
            <p className="text-red">{formErrors.weight}</p>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="Height"
                type="text"
                name="height"
                value={formValues.height}
                onChange={handleChange}
              />
            </FormGroup>
            <p className="text-red">{formErrors.height}</p>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="Temparature"
                type="text"
                name="temp"
                value={formValues.temp}
                onChange={handleChange}
              />
            </FormGroup>
            <p className="text-red">{formErrors.temp}</p>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="Blood Pressure"
                type="text"
                name="BP"
                value={formValues.bp}
                onChange={handleChange}
              />
            </FormGroup>
            <p className="text-red">{formErrors.bp}</p>
          </Col>
          <Col md="6">
            <FormGroup>
              <textarea
                id="exampleFormControlInput1"
                placeholder="Complain"
                type="text"
                name="comp"
                value={formValues.comp}
                onChange={handleChange}
              />
            </FormGroup>
            <p className="text-red">{formErrors.comp}</p>
          </Col>
          <Col md="3" className="m-auto">
                <Button
                  color="primary"
                  type="button"
                  onClick={() => {handleSubmit()
                  }}
                >
                  Consult
                </Button>
          </Col>
        </Form>
      </Card>
    </>
  );
};
export default Forms;
