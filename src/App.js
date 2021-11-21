import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import React, { useState, useEffect } from "react";
//top use the react router package, surround the whole app with the router component
function App() {
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const linkedInUrl = "https://www.linkedin.com/in/david-tunnell/";
    const gitHubUrl = "https://github.com/DavidTunnell";
    const stackOverflowUrl =
        "https://stackoverflow.com/users/1524210/david-tunnell?tab=profile";

    //initialize and track google analytics - https://www.npmjs.com/package/react-ga
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_UA);
    ReactGA.pageview(window.location.pathname + window.location.search);

    //smooth scroll to top - used for on click links to same page
    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const loginState = () => {
        setUserIsLoggedIn(true);
    };
    const logoutState = () => {
        setUserIsLoggedIn(false);
    };

    return (
        <Router>
            {/* ^ Here the app is wrapped with the router */}
            <div className="App">
                <Header
                    linkedInUrl={linkedInUrl}
                    gitHubUrl={gitHubUrl}
                    stackOverflowUrl={stackOverflowUrl}
                    toTop={toTop}
                />
                <div className="content">
                    {/* Next is the decision of where page content to go based on different routes
                        All routes go in the switch component so only one renders at a time based on route  */}
                    <Switch>
                        {/* add a route for each component AND the component itself nested*/}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/login">
                            <Login userId={userId} setUserId={setUserId} />
                        </Route>
                        <Route exact path="/dashboard">
                            <Dashboard />
                        </Route>
                        {/* all other routes go to a 404 page - must be at bottom*/}
                        <Route path="/404">
                            <NotFound />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
                <Footer
                    linkedInUrl={linkedInUrl}
                    gitHubUrl={gitHubUrl}
                    stackOverflowUrl={stackOverflowUrl}
                    toTop={toTop}
                    userIsLoggedIn={userIsLoggedIn}
                    loginState={loginState}
                    logoutState={logoutState}
                    userId={userId}
                    setUserId={setUserId}
                />
            </div>
        </Router>
    );
}

export default App;
