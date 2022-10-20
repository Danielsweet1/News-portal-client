import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import LeftSide from "../Components/Shared/LeftSide/LeftSide";
import RightSide from "../Components/Shared/RightSide/RightSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSide ></RightSide>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
