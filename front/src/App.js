import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import AuthApi from "./AuthApi";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from '../src/pages/homepage/homepage.component';
import UserTable from '../src/pages/usersdetails/usersdetails.component';
import Header from '../src/component/header1/header.component';
import { StateSelect } from '../src/pages/userbystate/userbystate.component';
import Cookies from "js-cookie";

const HandleLogin = () => {
  const Auth = React.useContext(AuthApi);
  Auth.setAuth(true);
}

function App() {
  const [auth, setAuth] = React.useState(false)
  const readCookie = () => {
    const userid = Cookies.get("userid")
    console.log("cookiesuserid",userid);
    if (userid != null) {
      setAuth(true);
    }
  }
  React.useEffect(() => {
    readCookie();
  }, [])
  return (
    <div className="App">
      <AuthApi.Provider value={auth, setAuth}>
        <BrowserRouter>
          <Header auth={auth} />
          {/* <Route path='/' component={(false) ? ProtectedComponents : ProtectedLogin} />
          <Route path='/users' component={UserTable} />
          <Route path='/search' component={StateSelect} /> */}
          <Routes />
        </BrowserRouter>
      </AuthApi.Provider>
    </div>
  );
}

const Login = () => {
  return (
    <div>
      <Switch>
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

const ProtectedComponents = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />

      </Switch>
    </div>
  )
}

const Routes = () => {
  const Auth = React.useContext(AuthApi)
  return (
    <div>
      <Switch>
        {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
        <ProtectedLogin path="/signin" auth={Auth.auth} component={SignInAndSignUpPage} />
        <ProtectedRoutes path="/search" auth={Auth.auth} component={StateSelect} />
        <ProtectedRoutes path="/" auth={Auth.auth} component={HomePage} />
      </Switch>
    </div>
  )
}
const ProtectedRoutes = ({ auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} render={() => (auth ? (<Component />) : <Redirect to="/signin" />)} />
    </div>
  )
}

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} render={() => (auth ? (<Redirect to="/" />) : (<Component />)  )} />
    </div>
  )
}




export default App;
