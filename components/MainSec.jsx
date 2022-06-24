import React from "react";
import { Row, Col, Stack, Button, Image } from "react-bootstrap";
import styles from "../styles/MainSec.module.css";
import styles2 from "../styles/Navbar.module.css";

const MainSec = () => {
  return (
    <Row id="main" className={`${styles.main}`}>
      <Col xs={12} md={7}>
        <Stack className="my-2" gap={3}>
          <Stack direction="horizontal" gap={2}>
            <div className={`w-25 ${styles.borderDiv}`}></div>
            <p className={` fw-bolder m-0 ${styles.name}`}>Ahmed Saied</p>
          </Stack>
          <h1 className="fw-bolder">
            Full Stack Web Developer Python / Django / React.js / Next.js
          </h1>
          <p className="text-secondary">
            {`Hello, I'm Ahmed Saied, a full stack web developer i build a full
            modern website from a to z with latest technologies, lets shake
            hands with me`}
          </p>
          <Stack direction="horizontal" gap={2}>
            <a href="#contactme">
              <Button className={styles.hireBtn} variant="primary">
                Hire me
              </Button>
            </a>

            <Button className={styles2.navBtn} variant="outline-primary">
              Read more
            </Button>
          </Stack>
          <hr className="m-0" />
          <p className={`text-secondary m-0 ${styles.span}`}>
            {`I'm currently open for full time or part time work`}
          </p>
        </Stack>
      </Col>
      <Col
        xs={12}
        md={{ span: 4, offset: 1 }}
        className="d-flex justify-content-end"
      >
        <Image
          className={`${styles.mainImg} mx-auto w-100 mt-3 mt-md-0`}
          src="/main.jpg"
          alt="ahmed saied"
        />
      </Col>
    </Row>
  );
};

export default MainSec;
