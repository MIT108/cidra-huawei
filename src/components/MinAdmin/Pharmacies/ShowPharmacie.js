
import { useState } from "react";
import { Redirect } from "react-router-dom";
import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Row,
    Col,
  Modal,
    CardHeader
  } from "reactstrap";
  import AdminPagesHeader from "components/Headers/AdminPagesHeader.js";

export default function ShowHospital() {
  const [goToDoctors, setgoToDoctors] = useState(false);

  if (goToDoctors) {
    return <Redirect to="Admin-Doctors"/>
  }
    return (
        <>
        <AdminPagesHeader/>
        <Card style={{ width: "55rem", margin:"auto", marginTop:"-5rem" }}>
        <CardHeader>
          <Button
            className="ni ni-bold-left"
            style={{ marginLeft: "85%", color: "blue" }}
            onClick={() => {setgoToDoctors(true)}}
          ></Button>
        </CardHeader>
          <CardImg
            alt="..."
            top
          />
          <CardBody>
            <CardTitle>Name: </CardTitle>
            <CardTitle>Register Number: </CardTitle>
            <CardTitle>Creation Date: </CardTitle>
            <CardTitle>Address: </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </>
    );
  
}