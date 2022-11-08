/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import { useState } from "react";

import {
  useHistory
} from "react-router-dom";
import {
  loginAction
} from 'services/api/auth/actions'
import {
  NotificationManager
}
from 'react-notifications';
import Logo from '../../assets/logo/CIDRAlogoBlueBg.svg';
import LogoFull from '../../assets/logo/CIDRAlogo-w-LabelBlue-Red.svg';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const onLogin = () => {
    const data = {
      "email": email,
      "password": password
    }
    loginAction(data).then((response) => {
      history.push("/admin/SuperAdmin");
      NotificationManager.success(response.data.message);
    }).catch((error) => {
      console.log("error", error)
      if (error.response) {
        if (error.response.status == 422) {
          NotificationManager.error(error.response.data.message);
        }
      } else {
        NotificationManager.warning("Server Error");
      }
    })
    
  }


  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          {/* <CardHeader className="bg-transparent pb-5"> */}
            <div className="text-muted text-center mt-2 mb-3">
              <img src={Logo} alt="React Logo" style={{ 
                width: '30%',
                'box-shadow': 'rgb(38, 57, 77) 0 px 20 px 30 px - 10 px',
                'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                'border-radius': '50%'
                 }} />
            </div>
            <div className="text-muted text-center mt-2 mb-3">
              <img src={LogoFull} alt="React Logo" style={{ 
                width: '30%',
                 }} />
            </div>
          {/* </CardHeader> */}
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    value={email} onChange={e => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={password} onChange={e => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                {
                  isValidEmail(email) && password.length > 7 ? 
                    <>
                      <Button className="my-4" color="primary" type="button" 
                        onClick={() => {
                          onLogin();

                      }}
                      >
                        Sign in
                      </Button>
                    </> :
                    <>
                      <Button className="my-4" color="primary" type="button" disabled
                        onClick={() => {
                          console.log("Check");
                      }}
                      >
                        Sign in
                      </Button>
                    </>
                }
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
