import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Card, CardBody, CardHeader, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
const Chart = require("chart.js");


function SicknessPerRegion() {

    // Example 2 of Chart inside src/views/Index.js (Total orders - Card)
    let chartExample2 = {
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        callback: function (value) {
                            if (!(value % 10)) {
                                //return '$' + value + 'k'
                                return value;
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
                        content += yLabel;
                        return content;
                    }
                }
            }
        },
        data: {
            labels: ["EN", "NO", "AD", "ES", "CE", "SU", "LT", "OU", "NW", "SW"],
            datasets: [{
                label: "Sales",
                data: [25, 20, 30, 22, 17, 29, 25, 20, 30, 22],
                maxBarThickness: 20
            }]
        }
    };

    return (
      
        <Col xl="8">
        <Card className="shadow">
            <CardHeader className="bg-transparent">
            <Row className="align-items-center">
                <div className="col d-flex">
                    <div>
                        <h6 className="text-uppercase ls-1 mb-1">
                            Sickness Distributed
                        </h6>
                        <h2 className=" mb-0">Over Regions</h2>
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
            </Row>
            </CardHeader>
            <CardBody>
            {/* Chart */}
            <div className="chart">
                <Bar
                data={chartExample2.data}
                options={chartExample2.options}
                />
            </div>
            </CardBody>
        </Card>
        </Col>
  )
}

export default SicknessPerRegion