
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
    return (
        <>
        <Card style={{ width: "18rem" }}>
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