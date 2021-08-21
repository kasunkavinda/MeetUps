import MeetupList from "./meetups/MeetupList";
import { Container, Row, Col } from "react-bootstrap";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://wallpaperaccess.com/full/51363.jpg",
    address: "Gampaha-SriLanka",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAthhHB9V9DXZIQpQDf-xJfqrtp4J2IAzwMA&usqp=CAU",
    address: "Kandy-SriLanka",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

function AllMeetup() {
  return (
    <Container>
      <Row>
        <Col><h2>All Meetups</h2></Col>
      </Row>

      <MeetupList meetups={DUMMY_DATA} />
    </Container>
  );
}

export default AllMeetup;
