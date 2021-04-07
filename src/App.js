import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import AddVehicle from './components/vehicleComponents/AddVehicle';
import Dashboard from './components/Dashboard'
import DetailViewVehicle from './components/vehicleComponents/DetailViewVehicle';
import Login from './components/Login'
import { NavBar } from "./components/AppBar"
import React from 'react';
import UpdateVehicle from './components/vehicleComponents/UpdateVehicle';
import ViewVehicles from './components/vehicleComponents/ViewVehicles';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/viewVehicle">
            <ViewVehicles />
          </Route>
          <Route path="/addVehicle">
            <AddVehicle />
          </Route>
          <Route path="/updateVehicle/:id" component={UpdateVehicle} />
          <Route path="/detailViewVehicle/:id" component={DetailViewVehicle} />
        </Switch>
      </div >
    </Router >
  );
}

export default App;
