import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetup from "./component/AllMeetup";
import NewMeetup from "./component/NewMeetup";
import Favorites from "./component/Favorites";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
