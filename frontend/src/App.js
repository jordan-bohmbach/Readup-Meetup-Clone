import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import SplashPage from "./components/SplashPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import EventListPage from "./components/EventListPage";
import GroupListPage from "./components/GroupListPage";
import { getEvents } from "./store/events";
import { getGroups } from "./store/group";

function App() {
  const dispatch = useDispatch();
  const eventList = useSelector(state => Object.values(state.events))
  const groupList = useSelector(state => Object.values(state.groups))
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getEvents())
    dispatch(getGroups())
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path = '/'>
            <SplashPage eventList={eventList} groupList={groupList}/>
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/events'>
            <EventListPage eventList={eventList}/>
          </Route>
          {/* <Route path='/events/:eventId'>
            <EventListPage eventTile={eventList} />
          </Route> */}
          <Route path='/groups'>
            <GroupListPage groupList={groupList}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;