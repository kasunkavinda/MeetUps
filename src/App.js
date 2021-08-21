import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetup from "./component/AllMeetup";
import NewMeetup from "./component/NewMeetup";
import Favorites from "./component/Favorites";
import MainNavigation from "./component/layout/MainNavigation";

import MeetupItem from "./component/meetups/MeetupItem";

function App() {
  return (
    <div>
      <MainNavigation/>
      <Switch>
        <Route path="/" exact>
          <AllMeetup />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
