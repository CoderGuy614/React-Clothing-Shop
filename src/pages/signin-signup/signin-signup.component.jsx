import React from "react";

import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/Sign-up.component";

import "./signin-signup.styles.scss";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
