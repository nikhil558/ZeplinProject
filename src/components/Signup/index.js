import { Component } from "react";
import "./index.css";

const initialState = {
  email: "",
  company: "",
  password: "",
  checked: false,
  emailError: "",
  nameError: "",
  passwordError: "",
  checkedError: "",
};

class Signup extends Component {
  state = initialState;

  emailValue = (event) => {
    this.setState({ email: event.target.value });
  };

  companyNameValue = (event) => {
    this.setState({ company: event.target.value });
  };

  passwordValue = (event) => {
    this.setState({ password: event.target.value });
  };

  checkedStatus = (event) => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  validate = () => {
    const { checked, email, company, password } = this.state;
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let checkedError = "";

    if (!email.includes("@")) {
      emailError = "Invalid email";
    }
    if (!company) {
      nameError = "Name cannot be blank";
    }

    if (password.length < 8) {
      passwordError = "Password length must be 8";
    } else if (password.search(/[0-9]/) === -1) {
      passwordError = "Atleast 1 numeric value";
    } else if (password.search(/[A-Z]/) === -1) {
      passwordError = "Atleast 1 upperCase letter";
    } else if (
      password.search(/[! @  #  $  % ^  &  *  (  )  _  +  ,  . ]/) === -1
    ) {
      passwordError = "Atleast 1 spetial character";
    }

    if (checked === false) {
      checkedError = "Please check the checkbox";
    }

    if (emailError || passwordError || nameError || checkedError) {
      this.setState({ emailError, nameError, passwordError, checkedError });
      return false;
    }
    return true;
  };

  onSubmit = (event) => {
    const { SigninFunction, pushUserData } = this.props;
    const { email, company, password } = this.state;
    event.preventDefault();
    if (this.validate()) {
      pushUserData(email, company, password);
      SigninFunction();
      this.setState(initialState);
    }
  };

  navigateSignIn = () => {
    const { SigninFunction } = this.props;
    SigninFunction();
  };

  render() {
    const {
      email,
      company,
      password,
      checked,
      emailError,
      nameError,
      checkedError,
      passwordError,
    } = this.state;
    return (
      <div className="signup-container">
        <p className="signup-logo">Omega</p>
        <form className="signup-form" onSubmit={this.onSubmit}>
          <h1 className="signup-heading">Sign Up</h1>
          <p className="signup-para">No credit card required</p>
          <input
            type="text"
            value={email}
            placeholder="Email address"
            className="signup-input"
            onChange={this.emailValue}
          />
          <p className="error-msg">{emailError}</p>
          <input
            type="text"
            value={company}
            placeholder="Company name"
            className="signup-input"
            onChange={this.companyNameValue}
          />
          <p className="error-msg">{nameError}</p>
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="signup-input"
            onChange={this.passwordValue}
          />
          <p className="error-msg">{passwordError}</p>
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              defaultChecked={checked}
              onChange={this.checkedStatus}
            />
            <p className="checkbox-label">
              I agree to the{" "}
              <span className="terms-conditions">Terms & Conditions</span>
            </p>
          </div>
          <p className="error-msg">{checkedError}</p>
          <button type="submit" className="signup-button">
            Get Started
          </button>
          <p className="account-para">
            Already have an account?{" "}
            <span className="sign-in-text" onClick={this.navigateSignIn}>
              Sign in
            </span>
          </p>
        </form>
      </div>
    );
  }
}

export default Signup;
