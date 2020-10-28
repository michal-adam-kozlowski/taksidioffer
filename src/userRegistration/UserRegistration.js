
import React, { useEffect } from 'react';
// import MenuPage from './MenuPage.js'
import Reset from './Reset.js'
import Registration from './Registration.js'
import Login from './Login.js'
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

const UserRegistration = () => (

    <Router>
        <ScrollToTop>
            <div>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/Zresetuj-hasło" component={Reset} />
                    <Route path="/Zaloguj" component={Login} />
                    <Route path="/Rejestracja" component={Registration} />
                </Switch>

            </div>
        </ScrollToTop>
    </Router>
)

export default UserRegistration
