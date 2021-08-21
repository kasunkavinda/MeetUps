import { Row, Col, Card, Button } from "react-bootstrap";
import CustomCard from "../ui/CustomCard";
import classes from "./MeetupItem.module.css";
function MeetupItem(props) {
  return (
    <Row>
      <Col>
        {/* <CustomCard> */}
          <Card className={classes.cardslot}>
            <Card.Img
              variant="top"
              src={props.image}
              className={classes.image}
            />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.address}</Card.Text>
              <Card.Text>{props.description}</Card.Text>
              <Button variant="primary">To Favorites</Button>
            </Card.Body>
          </Card>
        {/* </CustomCard> */}
      </Col>
    </Row>
  );
}

export default MeetupItem;
