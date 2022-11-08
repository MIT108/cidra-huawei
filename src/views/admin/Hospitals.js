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
  Container,
  Row,
  Col,
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip,
  ButtonDropdown,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import {Redirect, Navigate} from "react-router-dom";

import AdminPagesHeader from "components/Headers/AdminPagesHeader.js";
import ShowHospital from "components/MinAdmin/Hospitals/ShowHospital";
import Forms from "components/MinAdmin/Hospitals/Forms";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  const [add, setAdd] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [edit, editHospital] = useState(false);

  if (toggle){
    return <Redirect to="Admin-ShowHospital"/>
  }


  return (
    <>
      <AdminPagesHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0 m-auto" xl="10">
            {add ? (
              <>
                <Card
                  className="shadow"
                  style={{
                    position: "absolute",
                    zIndex: "1000",
                    width: "85%",
                    marginLeft: "5%",
                  }}
                >
                  <CardHeader>
                    <Row className="align-items-center">
                      <div className="col">
                        <h2 className="mb-0">Add A Hospital</h2>
                      </div>
                      <div className="col text-right">
                        <Button
                          color="primary"
                          href="#pablo1"
                          onClick={() => setAdd(false)}
                          size="lg"
                          className="ni ni-fat-remove"
                        ></Button>
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Forms />
                  </CardBody>
                </Card>
              </>
            ) : (
              <></>
            )}
            
            {edit ? (
              <>
                <Card
                  className="shadow"
                  style={{
                    position: "absolute",
                    zIndex: "1000",
                    width: "85%",
                    marginLeft: "5%",
                  }}
                >
                  <CardHeader>
                    <Row className="align-items-center">
                      <div className="col">
                        <h2 className="mb-0">Editting A Hospital</h2>
                      </div>
                      <div className="col text-right">
                        <Button
                          color="primary"
                          href="#pablo1"
                          onClick={() => editHospital(false)}
                          size="lg"
                          className="ni ni-fat-remove"
                        ></Button>
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Forms />
                  </CardBody>
                </Card>
              </>
            ) : (
              <></>
            )}

            {toggle ? (
              <>
                <Card
                  className="shadow"
                  style={{
                    position: "absolute",
                    zIndex: "1000",
                    width: "85%",
                    marginLeft: "5%",
                  }}
                >
                  <CardHeader>
                    <Row className="align-items-center">
                      <div className="col">
                        <h2 className="mb-0"></h2>
                      </div>
                      <div className="col text-right">
                        <Button
                          color="primary"
                          href="#pablo1"
                          onClick={() => setToggle(false)}
                          size="lg"
                          className="ni ni-fat-remove"
                        ></Button>
                      </div>
                    </Row>
                  </CardHeader>
                  <CardBody className="m-auto">
                    <ShowHospital />
                  </CardBody>
                </Card>
              </>
            ) : (
              <></>
            )}

            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">Hospitals</h2>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo1"
                      onClick={() => setAdd(true)}
                      size="lg"
                    >
                      Add Hospital
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Hosp. Name</th>
                    <th scope="col">Reg Number</th>
                    <th scope="col">Quarter</th>
                    <th scope="col" className="justify-content-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">1</td>
                    <td>CMA Nkomo</td>
                    <td>12dda32</td>
                    <td>Nkomo</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={() => setToggle(true)}
                          >
                            <ButtonDropdown>View</ButtonDropdown>
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={() => editHospital(true)}
                          >
                            <ButtonDropdown>Edit</ButtonDropdown>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <td scope="row">1</td>
                    <td>CMA Nkomo</td>
                    <td>12dda32</td>
                    <td>Nkomo</td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <ButtonDropdown>View</ButtonDropdown>
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <ButtonDropdown>Edit</ButtonDropdown>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
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
