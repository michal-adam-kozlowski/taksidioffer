
import React, { useEffect } from 'react';
import './App.css';
import MenuPage from "./MenuPage.js"
import MainPage from './mainPage/MainPage.js'
import UserRegistration from './userRegistration/UserRegistration.js'
import Footer from './Footer.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
  withRouter
} from "react-router-dom";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)

function App() {
  return (

    <Router>
      <div>
        <ScrollToTop>
        <MenuPage />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/Zaloguj" component={UserRegistration} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
