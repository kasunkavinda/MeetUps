import { useHistory } from "react-router";
import NewMeetupForm from "./meetups/NewMeetupForm";

function NewMeetup() {
  const history = useHistory();
  function addMeetupHandler(meetupDataList) {
    fetch(
      "https://portfoliosite-16747-default-rtdb.firebaseio.com/meetupscollection.json",
      {
        method: "POST",
        body: JSON.stringify(meetupDataList),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <div>
      Contact Me!
      <section>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    </div>
  );
}

export default NewMeetup;
