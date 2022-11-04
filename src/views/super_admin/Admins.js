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
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
  CardHeader,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Input,
  FormGroup,
  Form,
  Button,
  CardTitle
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import List from "components/SuperAdmin/Admins/List";
import Add from "components/SuperAdmin/Admins/Add";
import Statistic from "components/SuperAdmin/Admins/Statistic";

const Index = (props) => {

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

     const [state, setState] = useState({
         tabs: 1
     });
     const toggleNavs = (e, state, index) => {
         e.preventDefault();
         setState({
             [state]: index
         });
  };
  
  return (
    <>
      <Header  />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="p-3 shadow">
              <div className="nav-wrapper">
                <Nav
                    className="nav-fill flex-column flex-md-row"
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                >
                    <NavItem>
                        <NavLink
                            aria-selected={state.tabs === 1}
                            className={classnames("mb-sm-3 mb-md-0", {
                            active: state.tabs === 1
                            })}
                            onClick={e => toggleNavs(e, "tabs", 1)}
                            href="#pablo"
                            role="tab"
                        >
                            <i className="ni ni-cloud-upload-96 mr-2" />
                            Statistics
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            aria-selected={state.tabs === 2}
                            className={classnames("mb-sm-3 mb-md-0", {
                            active: state.tabs === 2
                            })}
                            onClick={e => toggleNavs(e, "tabs", 2)}
                            href="#pablo"
                            role="tab"
                        >
                            <i className="ni ni-bell-55 mr-2" />
                            List
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            aria-selected={state.tabs === 3}
                            className={classnames("mb-sm-3 mb-md-0", {
                            active: state.tabs === 3
                            })}
                            onClick={e => toggleNavs(e, "tabs", 3)}
                            href="#pablo"
                            role="tab"
                        >
                            <i className="ni ni-calendar-grid-58 mr-2" />
                            Add
                        </NavLink>
                    </NavItem>
                </Nav>
                </div>
                <Card className="shadow">
                <CardBody>
                    <TabContent activeTab={"tabs" + state.tabs}>
                        <TabPane tabId="tabs1">
                        <Statistic />
                        </TabPane>
                    <TabPane tabId="tabs2">
                        <List />
                    </TabPane>
                    <TabPane tabId="tabs3">
                        <Add />
                    </TabPane>
                    </TabContent>
                </CardBody>
                </Card>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
