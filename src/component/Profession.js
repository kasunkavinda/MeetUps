import { useState } from "react";
import { Row, Col, Button, ButtonGroup, Alert, Badge } from "react-bootstrap";
import classes from "./Profession.module.css";

function Profession() {
  const [currentProfessionType, setProfessionType] =
    useState("UI/ UX Engineer");
  return (
    <>
      <Row className={classes.customRow}>
        <Col className={classes.buttonCol}>
          <h3>What would you like me to do?</h3>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() => setProfessionType("UI/ UX Engineer")}
            >
              UI/ UX Engineer
            </Button>
            <Button
              variant="warning"
              onClick={() => setProfessionType("Front End Developer")}
            >
              Front End Developer
            </Button>
            <Button
              variant="info"
              onClick={() => setProfessionType("Graphic Designer")}
            >
              Graphic Designer
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant="success">
            <Alert.Heading>
              Hey, nice to see you. I will be your{" "}
              <span className={classes.professionType}>
                {currentProfessionType}
              </span>
            </Alert.Heading>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep
              things nice and tidy.
            </p>
          </Alert>
        </Col>
      </Row>
    </>
  );
}

export default Profession;
