import React, { useEffect, useState } from "react";
import SignInAndSignUpPage from "../components/sign-in-and-sign-up.component";
import Header from '../components/header.component';
import Cookies from 'js-cookie';
import '../styles/globals.css'
import { useRouter } from 'next/router';
import App from './index';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [auth, setAuth] = useState(false);
  useEffect(() => {

    var token = Cookies.get("token")
    if (token != undefined) {
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
            // this.setState({ auth: false });
            setAuth(false)
          }

        })
      const userid = Cookies.get("userid")
      console.log("cookiesuserid", userid);
      if (userid != null) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    } else {
      setAuth(false)
    }

    return (
      <>
        
      </>
    )
  })

  return (
    <>
      <div style={{ marginTop: "100" }}>
        {auth ? (<Component {...pageProps} />) : (<App {...pageProps}/>) }
      </div>
    </>
  )
}

export default MyApp
























