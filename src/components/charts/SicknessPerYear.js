import React, {
    useState
} from 'react'
import {
    Line,
    Bar
}
from "react-chartjs-2";
import classnames from "classnames";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Nav, NavItem, NavLink, Row } from 'reactstrap'
import { parseOptions } from 'variables/charts';
import { chartOptions } from 'variables/charts';
const Chart = require("chart.js");




function SicknessPerYear() {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");


    let chartExample1 = {
        options: {
            scales: {
                yAxes: [{
                    gridLines: {
                        color: "#212529",
                        zeroLineColor: "#212529"
                    },
                    ticks: {
                        callback: function (value) {
                            if (!(value % 10)) {
                                return value + "k";
                            }
                        }
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function (item, data) {
                        var label = data.datasets[item.datasetIndex].label || "";
                        var yLabel = item.yLabel;
                        var content = "";

                        if (data.datasets.length > 1) {
                            content += label;
                        }

                        content += yLabel + "k";
                        return content;
                    }
                }
            }
        },
        data1: (canvas) => {
            return {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Performance",
                    data: [0, 20, 10, 30, 0, 20, 10, 30, 15, 40, 20, 60, 60]
                }]
            };
        },
        data2: (canvas) => {
            return {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Performance",
                    data: [0, 20, 5, 25, 0, 20, 10, 30, 10, 30, 15, 40, 40]
                }]
            };
        }
    };


    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };
  return (
          
    <Col className="mb-5 mb-xl-0" xl="12">
    <Card className="bg-gradient-default shadow">
        <CardHeader className="bg-transparent">
        <Row className="align-items-center">
            <div className="col d-flex">
                <div>
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                        Sickness Distributed
                    </h6>
                    <h2 className="text-white mb-0">Over The Year</h2>
                </div>
                            
                <Col md="6">
                <FormGroup>
                    <InputGroup className="input-group-alternative mb-4">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="ni ni-zoom-split-in" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        className="form-control-alternative"
                        placeholder="Search"
                        type="text"
                    />
                    </InputGroup>
                </FormGroup>
                </Col>
            </div>
            <div className="col">
            <Nav className="justify-content-end" pills>
                <NavItem>
                <NavLink
                    className={classnames("py-2 px-3", {
                    active: activeNav === 1
                    })}
                    href="#pablo"
                    onClick={(e) => toggleNavs(e, 1)}
                >
                    <span className="d-none d-md-block">Infectious</span>
                    <span className="d-md-none">I</span>
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames("py-2 px-3", {
                    active: activeNav === 2
                    })}
                    data-toggle="tab"
                    href="#pablo"
                    onClick={(e) => toggleNavs(e, 2)}
                >
                    <span className="d-none d-md-block">Noninfectious</span>
                    <span className="d-md-none">N</span>
                </NavLink>
                </NavItem>
            </Nav>
            </div>
        </Row>
        </CardHeader>
        <CardBody>
        {/* Chart */}
        <div className="chart">
            <Line
            data={chartExample1[chartExample1Data]}
            options={chartExample1.options}
            getDatasetAtEvent={(e) => console.log(e)}
            />
        </div>
        </CardBody>
    </Card>
    </Col>
  )
}

export default SicknessPerYear