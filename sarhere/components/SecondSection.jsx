import React from "react";
import { Row, Col } from "react-bootstrap";

import ShareSection from "./ShareSection";
import ShortageSection from "./ShortageSection";

const SecondSection = () => {
  return (
    <>
      <Row className="px-3 px-md-5 mb-4 mb-xl-0">
        <Col className="me-auto" xs={12} md={4}>
          <ShareSection />
        </Col>
        <Col className="mt-3 mt-md-0 " xs={12} md={7}>
          <ShortageSection />
        </Col>
      </Row>
    </>
  );
};

export default SecondSection;
