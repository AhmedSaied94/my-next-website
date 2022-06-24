import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import { DiDjango, DiReact, DiHtml5 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <Row id="services" className="py-5">
      <Col xs={12} md={{ span: 10, offset: 1 }}>
        <h1 className="text-center py-5">
          From beginning ideas to individual integrity, rich identity from the{" "}
          <span className={styles.mainColor}>
            line on the paper to final projects
          </span>
        </h1>
      </Col>
      <Col xs={12} md={4}>
        <DiHtml5
          style={{ color: "#e34c26" }}
          className={`${styles.frameIco} mx-auto  d-block`}
        />
      </Col>
      <Col xs={12} md={6}>
        <Stack gap={2}>
          <h5 className="fw-bolder text-center text-md-start">Landing Page</h5>
          <p className="text-center text-md-start">
            Create modern landing page using pure html and css and latest
            versions html5 and css3 or using bootstrap(4&5) pages will be full
            responsive to all devices and very atrractive
          </p>
          <a
            href=""
            className={`${styles.mainColor} text-decoration-none text-center text-md-start`}
          >
            See works <BsArrowRight className="ms-1" />
          </a>
        </Stack>
      </Col>
      <Col className="mt-5" xs={12} md={4}>
        <DiReact
          style={{ color: "#61DBFB" }}
          className={`${styles.frameIco} mx-auto d-block`}
        />
      </Col>
      <Col className="mt-2 mt-md-5" xs={12} md={6}>
        <Stack gap={2}>
          <h5 className="fw-bolder text-center text-md-start">React Web App</h5>
          <p className="text-center text-md-start">
            Create modern front-end web app using React framework and Redux
            state managment tool and most common ui libraries like MaterialUI
            and Ant Design
          </p>
          <a
            href=""
            className={`${styles.mainColor} text-decoration-none text-center text-md-start`}
          >
            See works <BsArrowRight className="ms-1" />
          </a>
        </Stack>
      </Col>
      <Col className="mt-5" xs={12} md={4}>
        <DiDjango
          style={{ color: "#092e20" }}
          className={`${styles.frameIco} mx-auto d-block`}
        />
      </Col>
      <Col className="mt-2 mt-md-5" xs={12} md={6}>
        <Stack gap={2}>
          <h5 className="fw-bolder text-center text-md-start">
            Django Web App
          </h5>
          <p className="text-center text-md-start">
            Create modern full web app using django and django template engine
            or create restfull api back-end web app using Django rest framework
            and most common libraries for django
          </p>
          <a
            href=""
            className={`${styles.mainColor} text-decoration-none text-center text-md-start`}
          >
            See works <BsArrowRight className="ms-1" />
          </a>
        </Stack>
      </Col>
      <Col className="mt-5" xs={12} md={4}>
        <SiNextdotjs
          style={{ color: "#000" }}
          className={`${styles.frameIco} mx-auto d-block`}
        />
      </Col>
      <Col className="mt-2 mt-md-5" xs={12} md={6}>
        <Stack gap={2}>
          <h5 className="fw-bolder text-center text-md-start">Next Web App</h5>
          <p className="text-center text-md-start">
            Create modern front-end web app or static website using Next.js
            having server side rendering and api routing using React components
            and Redux state managment tool and most common ui libraries like
            MaterialUI and Ant Design
          </p>
          <a
            href=""
            className={`${styles.mainColor} text-decoration-none text-center text-md-start`}
          >
            See works <BsArrowRight className="ms-1" />
          </a>
        </Stack>
      </Col>
    </Row>
  );
};

export default Services;
