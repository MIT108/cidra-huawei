import React from 'react'
import { Button, Col, Form, FormGroup, Input, Row } from 'reactstrap'

function Add() {
  return (
        <div>

            <Form>
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <Input
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Input
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                            type="email"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>    
                            <Button color="secondary" type="button">
                            Add
                            </Button>
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Button color="primary" type="button">
                            Reset Form
                            </Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
  )
}

export default Add