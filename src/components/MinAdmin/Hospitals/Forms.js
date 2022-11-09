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
} from "reactstrap";

const Forms = () => {
  const initialValues = {
    registrationNum: "",
    address: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [Hname, setHname] = useState("");
  const [email, setEmail] = useState("");

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
    if (!values.registrationNum) {
      errors.registrationNum = "Registration Number is Required";
    }
    if (!values.address) {
      errors.address = "address is Required";
    }
    return errors;
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const addAdmin = () => {
    var data = {
      email: email,
      name: Hname,
    };
    addAdmin(data)
      .then((response) => {
        NotificationManager.success(response.data.message);
        setEmail("");
        setHname("");
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          NotificationManager.error(error.response.data.errors[0].msg);
        } else {
          NotificationManager.warning("Server Error");
        }
      });
  };

  useEffect(() => {
    setHname(Hname.replace(/[^a-zA-Z ]/g, ""));
    if (Hname.split(" ").length - 1 > 1) {
      setHname(Hname.slice(0, -1));
      console.log(Hname);
    } else {
      let regex = / /g;
      var newEmail = Hname.toLowerCase();
      newEmail = newEmail.replace(regex, ".");
      newEmail = newEmail + "@minsante.com";
      setEmail(newEmail);
    }
  }, [Hname]);
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
                value={Hname}
                onChange={(e) => setHname(e.target.value)}
              />
            </FormGroup>
            <p className="text-red">{formErrors.Hname}</p>
          </Col>
          <Col md="6">
            <FormGroup>
              <Input
                id="exampleFormControlInput1"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <p className="text-red">{formErrors.email}</p>
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
            <p className="text-red">{formErrors.registrationNum}</p>
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
            <p className="text-red">{formErrors.address}</p>
          </Col>
          <Col md="3" className="">
              {isValidEmail(email) ? (
                <>
                  <Button
                    color="primary"
                    type="button"
                    onClick={() => {
                      addAdmin();
                    }}
                  >
                    Add
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    color="primary"
                    type="button"
                    disabled
                    onClick={() => {
                      // console.log("Check");
                    }}
                  >
                    Add
                  </Button>
                </>
              )}
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Forms;
