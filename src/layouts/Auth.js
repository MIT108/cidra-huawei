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
import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar.js";
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import BGImage from '../assets/logo/backgrounde.svg'

import routes from "route";

const Auth = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.body.style.backgroundImage = 'url(../assets/logo/backgrounde.svg)';
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  return (
    <>
      <div className="main-content" ref={mainContent} >
        
        <div className="separator separator-bottom separator-skew zindex-100" style={{ 
          position: 'absolute',
          width: '100%',
              height: '100%',
           }}>
            <img src={BGImage} alt="React Logo" />
          </div>
        
        {/* <AuthNavbar /> */}
        <NotificationContainer/>

        {/* <div className="header bg-gradient-info py-7 py-lg-8"> */}
          {/* <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container> */}
        {/* </div> */}
        {/* Page content */}
        <Container className="" style={{ 
          height: '100vh',
          'justifyContent': 'center',
          'alignItems': 'center',
         }}>
          <Row className="justify-content-center" style={{ 
            paddingTop: '100px',
           }}>
            <Switch>
              {getRoutes(routes)}
              <Redirect from="*" to="/auth/login" />
            </Switch>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Auth;
