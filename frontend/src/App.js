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

import CreateEventForm from "./components/CreateEventForm";
import CreateGroupForm from "./components/CreateGroupForm";

import EditEventForm from "./components/EditEventForm";
import EditGroupForm from "./components/EditGroupForm";

import EventDetails from "./components/EventDetails";
import GroupDetails from "./components/GroupDetails";

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
          <Route exact path='/events'>
            <EventListPage eventList={eventList}/>
          </Route>
          <Route exact path='/events/new'>
            <CreateEventForm />
          </Route>
          <Route exact path='/events/:eventId/edit'>
            <EditEventForm />
          </Route>
          <Route exact path='/events/:eventId'>
            <EventDetails />
          </Route>
          <Route exact path='/groups'>
            <GroupListPage groupList={groupList} />
          </Route>
          <Route exact path='/groups/new'>
            <CreateGroupForm />
          </Route>
          <Route exact path='/groups/:groupId/edit'>
            <EditGroupForm />
          </Route>
          <Route exact path='/groups/:groupId'>
            <GroupDetails />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;