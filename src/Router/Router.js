import { useContext } from "react";
import {Signin} from '../pages/Signin';
import {Signup} from '../pages/Signup';
import Navbar from '../component/Navbar';
import FirebaseAuthContext from '../Context/AuthContext';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter () {

    // const { currentUser } = useContext(FirebaseAuthContext);
    return(

        <Router>

            <Navbar />
            <Switch>
                <Route exact path="/register" component={Signup} />
                <Route exact path="/login" component={Signin} />
            </Switch>


        </Router>

    );
}

export default AppRouter;