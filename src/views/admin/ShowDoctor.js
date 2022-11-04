import React, { useState } from "react";
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
  CardHeader,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  ButtonDropdown,
  DropdownToggle,
} from "reactstrap";
import { Redirect } from "react-router-dom";

import AdminPagesHeader from "components/Headers/AdminPagesHeader.js";

export default function ShowHospital() {
  const [goToDoctors, setgoToDoctors] = useState(false);

  if (goToDoctors) {
    return <Redirect to="Admin-Doctors" />;
  }
  return (
    <>
      <AdminPagesHeader />
      <Card style={{ width: "55rem", margin: "auto", marginTop: "-5rem" }}>
        <CardHeader>
          <div style={{ marginLeft: "75%", marginBottom: "-4.5%" }}>
            <UncontrolledDropdown>
              <DropdownToggle
                className="btn-icon-only text-light"
                href="#pablo"
                role="button"
                size="lg"
                color=""
                onClick={(e) => e.preventDefault()}
              >
                <i className="fas fa-ellipsis-v" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem href="#pablo">
                  <ButtonDropdown>Approve</ButtonDropdown>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <ButtonDropdown>Decline</ButtonDropdown>
                </DropdownItem>
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <ButtonDropdown>Suspend</ButtonDropdown>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <Button
            className="ni ni-bold-left"
            style={{ marginLeft: "85%", color: "blue" }}
            onClick={() => {
              setgoToDoctors(true);
            }}
          ></Button>
        </CardHeader>
        <CardImg alt="..." top />
        <CardBody className="justify-content-center">
          <CardTitle>Name: </CardTitle>
          <CardTitle>Register Number: </CardTitle>
          <CardTitle>Creation Date: </CardTitle>
          <CardTitle>Address: </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </>
  );
}
