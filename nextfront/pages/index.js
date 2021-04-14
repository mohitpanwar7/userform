import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import SignInAndSignUpPage from "../components/sign-in-and-sign-up.component";
import HomePage from '../components/homepage.component';
import UserTable from '../components/usersdetails.component';
import Header from '../components/header.component';
import Cookies from "js-cookie";
import Link from 'next/link'
import AuthApi from '../components/AuthApi';
import StateSelect from '../components/userbystate.component';
import { withRouter } from 'next/router'
// import Router from 'next/router'

// export default function Home() {
//   return (
//     <div style={{marginTop:"100px"}}>
//            <h1 >this is next page</h1>
//     </div>
//   )
// }



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    }
  }
  userauth = () => {

    var token = Cookies.get("token")
    if (token != undefined) {
      console.log("token======>", token)
      fetch('/api/userauth',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(token)
        })
        .then(response => response.json())
        .then(response => {
          console.log("token response===>", response)
          if (response.message != "Token is invalid!") {
            console.log("userauthresponse===>",response)
            Cookies.set("id", response.id);
            Cookies.set("email", response.email);
            Cookies.set("firstname", response.firstname);
            Cookies.set("lastname", response.lastname);
          } else {
            
            Cookies.remove("id", { path: '' });
            Cookies.remove("email", { path: '' });
            Cookies.remove("firstname", { path: '' });
            Cookies.remove("lastname", { path: '' });
            Cookies.remove("token", { path: '' });
            this.setState({ auth: false });
          }

        })
      const id = Cookies.get("id")
      console.log("cookiesid", id);
      if (id != null) {
        this.setState({ auth: true })
      } else {
        this.setState({ auth: false })
      }
    } else {
      this.setState({ auth: false })
    }
  }
  componentDidMount() {
    this.userauth();
  }

  render() {
    const auth = this.state.auth;
    const { router } = this.props;
    
    return (
      <div className="App">
        <AuthApi.Provider value={auth} >
          <Header auth={auth} userauth={this.userauth} />
          {/* <Route path='/' component={(false) ? ProtectedComponents : ProtectedLogin} />*/}
          {/* <Route exact path='/users' component={UserTable} /> */}
          {/*<Route path='/search' component={StateSelect} /> */}
          {/* <Routes router={router} userauth={this.userauth} /> */}
          {(auth ? (<HomePage userauth={this.userauth} auth={auth} />) : (<SignInAndSignUpPage auth={auth} userauth={this.userauth} />))}
          
        </AuthApi.Provider>
      </div>
    );
  }
}
export default withRouter(App);
// const Login = () => {
//   return (
//     <div>
//       <Switch>
//         <Route path='/signin' component={SignInAndSignUpPage} />
//       </Switch>
//     </div>
//   )
// }

// const ProtectedComponents = () => {
//   return (
//     <div>
//       <Switch>
//         <Route exact path='/' component={HomePage} />

//       </Switch>
//     </div>
//   )
// }

const Routes = ({ userauth}) => {
  const Auth = React.useContext(AuthApi)
  // const Auth = false ;
  // const router = useRouter();
  console.log("props", Auth)
  return (
    <div>
      {console.log("auth state",Auth)}
      {/* <BrowserRouter>
      <Switch> */}
      {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
      {/* <ProtectedLogin path="/signin" auth={Auth} userauth={userauth} component={SignInAndSignUpPage} /> */}
      {/* <ProtectedRoutes path="/search" auth={Auth} component={StateSelect} /> */}
      {(Auth ? (<ProtectedRoutes exact path="/" auth={Auth} userauth={userauth} component={HomePage} />) : (<ProtectedLogin path="/signin" auth={Auth} userauth={userauth} component={SignInAndSignUpPage} />))}
      {/* <ProtectedRoutes path="/users" auth={Auth} component={UserTable}/> */}
      
      {/* </Switch>
      </BrowserRouter> */}
    </div>
  )
}
const ProtectedRoutes = ({ userauth, auth, component: Component, ...rest }) => {

  return (
    <div>
      <HomePage userauth={userauth} auth={auth} />
    </div>
  )
}

const ProtectedLogin = ({ userauth, auth, component: Component, ...rest }) => {

  return (
    <div>
      <SignInAndSignUpPage auth={auth} userauth={userauth} />
    </div>
  )
}



