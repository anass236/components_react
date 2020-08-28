import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Task from './pages/Task';
import PersistentDrawerLeft from "./components/containers/drawer/DrawerNavigation";

function App() {
    return (
        // <div>
        //     <PersistentDrawerLeft>
        //         <Switch>
        //             <Route exact path="/dashboard" component={props => <Home {...props} />}/>
        //             <Route path='/calendar' component={props => <Calendar {...props} />}/>
        //             <Route path='/Task' component={props => <Task {...props} />}/>
        //         </Switch>
        //     </PersistentDrawerLeft>
        // </div>
        <>
        </>
    );
}

export default App;
