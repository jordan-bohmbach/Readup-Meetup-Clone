import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import SplashPage from "./components/SplashPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import EventListPage from "./components/EventListPage";
import GroupListPage from "./components/GroupListPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path = '/'>
            <SplashPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/events'>
            <EventListPage />
          </Route>
          <Route path='/groups'>
            <GroupListPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;