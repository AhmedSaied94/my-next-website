import React from "react";
import { Row, Col } from "react-bootstrap";
import ManSection from "./ManSection";
import SendQue from "./SendQue";
const ThirdSection = () => {
  return (
    <Row className="px-3 px-md-5">
      <Col xs={12} md={6}>
        <SendQue />
      </Col>
      <Col xs={12} md={6}>
        <ManSection />
      </Col>
    </Row>
  );
};

export default ThirdSection;
