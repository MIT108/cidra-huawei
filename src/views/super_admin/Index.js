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
import { useEffect, useState } from "react";
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
import CardStatistics from "components/CardStatistics";
import { historyList } from "services/api/common";

const Index = (props) => {
  const history = useHistory();
  const [traffics, setTraffics] = useState([])

  useEffect(() => {
    historyList().then((response) => {
      response = response.splice(0, 4)
      setTraffics(response)
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        
        <CardStatistics />
        
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
                  {
                    traffics.map((traffic, index) => {

                      return (
                        <tr key={index}>
                          <td scope="row">{traffic.name}</td>
                          <td scope="row" >
                            {traffic.action}
                          </td>
                          <td scope="row">{traffic.time}</td>
                        </tr>
                      )
                    })
                  }
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
