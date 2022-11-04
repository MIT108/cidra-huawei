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
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
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
import SicknessPerYear from "components/charts/SicknessPerYear";
import SicknessPerRegion from "components/charts/SicknessPerRegion";
import { useHistory } from "react-router-dom";

const Index = (props) => {
  const history = useHistory();

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        
        <Row className="mb-3">
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="h3-uppercase mb-0"
                    >
                      HOSPITALS
                    </CardTitle>
                    <span className="h2 text-muted font-weight-bold mb-0">
                      150
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                      <i className="ni ni-building" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                  </span>{" "}
                  <span className="text-nowrap">Since last month</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase mb-0"
                    >
                      PHARMACIES
                    </CardTitle>
                    <span className="h2 font-weight-bold text-muted mb-0">85</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                      <i className="ni ni-building" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-danger mr-2">
                  </span>{" "}
                  <span className="text-nowrap">Since last week</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase mb-0"
                    >
                      DOCTORS   
                    </CardTitle>
                    <span className="h2 font-weight-bold text-muted mb-0">240</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                      <i className="fas fa-users" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-warning mr-2">
                  </span>{" "}
                  <span className="text-nowrap">Since yesterday</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Performance
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">49,65%</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                      <i className="fas fa-percent" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" /> 12%
                  </span>{" "}
                  <span className="text-nowrap">Since last month</span>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="h3-uppercase mb-0"
                    >
                      HOSPITALS
                    </CardTitle>
                    <span className="h2 text-muted font-weight-bold mb-0">
                      150
                    </span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                      <i className="ni ni-building" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                  </span>{" "}
                  <span className="text-nowrap">Since last month</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase mb-0"
                    >
                      PHARMACIES
                    </CardTitle>
                    <span className="h2 font-weight-bold text-muted mb-0">85</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                      <i className="ni ni-building" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-danger mr-2">
                  </span>{" "}
                  <span className="text-nowrap">Since last week</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase mb-0"
                    >
                      DOCTORS   
                    </CardTitle>
                    <span className="h2 font-weight-bold text-muted mb-0">240</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                      <i className="fas fa-users" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-warning mr-2">
                  </span>{" "}
                  <span className="text-nowrap">Since yesterday</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" xl="3">
            <Card className="card-stats mb-4 mb-xl-0">
              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Performance
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">49,65%</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                      <i className="fas fa-percent" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-muted text-sm">
                  <span className="text-success mr-2">
                    <i className="fas fa-arrow-up" /> 12%
                  </span>{" "}
                  <span className="text-nowrap">Since last month</span>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* <MapView /> */}

          <SicknessPerYear />
          
        </Row>
        <Row className="mt-5">
          
          <SicknessPerRegion />

          <Col xl="5">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Latest traffic</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => history.push('/admin/History')}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">user</th>
                    <th scope="col">action</th>
                    <th scope="col">time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">Miendjem thiery</td>
                    <td scope="row" >
                      hello am ok fdsjk fdsjafkasd faklsdnfklfa dsfasd fjasdf lasd
                    </td>
                    <td scope="row">2 min</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
