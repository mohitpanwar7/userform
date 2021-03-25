import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


import HomePage from '../src/pages/homepage/homepage.component';
import UserTable from '../src/pages/usersdetails/usersdetails.component';
import Header from '../src/component/header/header.component';
import {StateSelect} from '../src/pages/userbystate/userbystate.component';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/users' component={UserTable} />
        <Route path='/search' component={StateSelect}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
