import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import AuthApi from "./AuthApi";
import SignInAndSignUpPage from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from '../src/pages/homepage/homepage.component';
import UserTable from '../src/pages/usersdetails/usersdetails.component';
import Header from '../src/component/header/header.component';
import { StateSelect } from '../src/pages/userbystate/userbystate.component';
import Cookies from "js-cookie";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    }
  }
  userauth = () => {

    var token = Cookies.get("token")
    if ( token != undefined ) {
      console.log("token======>", token)
      fetch('http://localhost:5000/userauth',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(token)
        })
        .then(response => response.json())
        .then(response => {
          console.log("token response===>", response)
          if (response.message != "Token is invalid!") {
            Cookies.set("userid", response.userid);
            Cookies.set("email", response.email);
            Cookies.set("displayname", response.displayname);
          } else {
            Cookies.remove("userid", { path: '' });
            Cookies.remove("email", { path: '' });
            Cookies.remove("displayname", { path: '' });
            Cookies.remove("token", { path: '' });
            this.setState({ auth: false });
          }

        })
      const userid = Cookies.get("userid")
      console.log("cookiesuserid", userid);
      if (userid != null) {
        this.setState({ auth: true })
      } else {
        this.setState({ auth: false })
      }
    }else {
      this.setState({ auth: false })
    }
  }
  componentDidMount() {
    this.userauth();
  }

  render() {
    const auth = this.state.auth;
    return (
      <div className="App">
        <AuthApi.Provider value={auth} >
          <BrowserRouter>
            <Header auth={this.state.auth} userauth={this.userauth} />
            {/* <Route path='/' component={(false) ? ProtectedComponents : ProtectedLogin} />*/}
            <Route exact path='/users' component={UserTable} />
            {/*<Route path='/search' component={StateSelect} /> */}
            <Routes userauth={this.userauth} />
          </BrowserRouter>
        </AuthApi.Provider>
      </div>
    );
  }
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

const Routes = ({ userauth }) => {
  const Auth = React.useContext(AuthApi)
  // Auth.auth = true ;
  console.log("props", Auth)
  return (
    <div>
      <Switch>
        {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
        <ProtectedLogin path="/signin" auth={Auth} userauth={userauth} component={SignInAndSignUpPage} />
        <ProtectedRoutes path="/search" auth={Auth} component={StateSelect} />
        {/* <ProtectedRoutes path="/users" auth={Auth} component={UserTable}/> */}
        <ProtectedRoutes exact path="/" auth={Auth} userauth={userauth} component={HomePage} />
      </Switch>
    </div>
  )
}
const ProtectedRoutes = ({ userauth, auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} render={() => (auth ? (<Component userauth={userauth} auth={auth}/>) : <Redirect to="/signin" />)} />
    </div>
  )
}

const ProtectedLogin = ({ userauth, auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} render={() => (auth ? (<Redirect to="/" />) : (<Component userauth={userauth} />))} />
    </div>
  )
}




export default App;
