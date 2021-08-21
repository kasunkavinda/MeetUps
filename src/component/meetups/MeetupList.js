import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </>
  );
}

export default MeetupList;
