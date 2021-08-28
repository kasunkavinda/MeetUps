import { useState, useEffect } from "react";
import MeetupList from "./meetups/MeetupList";
import Profession from "./Profession";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "https://wallpaperaccess.com/full/51363.jpg",
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
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://portfoliosite-16747-default-rtdb.firebaseio.com/meetupscollection.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    <section>
      <p>Loading.....</p>
    </section>;
  }
  return (
    <div>
      <Profession />
      {/* <MeetupList meetups={DUMMY_DATA} /> */}
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetup;
