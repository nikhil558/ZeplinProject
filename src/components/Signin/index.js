import { Component } from "react";
import "./index.css";

class Signin extends Component {
  state = {
    email: "",
    password: "",
    checked: false,
    loginError: "",
    checkedError: "",
  };

  emailValue = (event) => {
    this.setState({ email: event.target.value });
  };

  passwordValue = (event) => {
    this.setState({ password: event.target.value });
  };

  checkedStatus = (event) => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  onValidate = () => {
    const { maintainData } = this.props;
    const { email, password, checked } = this.state;
    let loginError = "";
    let checkedError = "";
    const checkingEmail = maintainData.filter((each) => each.email === email);
    console.log(checkingEmail);
    if (checkingEmail.length !== 0) {
      if (
        checkingEmail[0].email !== email ||
        checkingEmail[0].password !== password
      ) {
        loginError = "Invalid username and password";
      }
    } else {
      loginError = "Invalid Username";
    }

    if (checked === false) {
      checkedError = "Please checked the checkbox";
    }

    if (loginError || checkedError) {
      this.setState({ loginError, checkedError });
      return false;
    }
    return true;
  };

  onSubmit = (event) => {
    const { onLoginSuccess } = this.props;
    event.preventDefault();
    if (this.onValidate()) {
      onLoginSuccess();
    }
  };

  navigateSignup = () => {
    const { SignupFunction } = this.props;
    SignupFunction();
  };

  render() {
    const { email, password, checked, loginError, checkedError } = this.state;
    return (
      <div className="signup-container">
        <p className="signup-logo">Omega</p>
        <form className="signup-form" onSubmit={this.onSubmit}>
          <h1 className="signup-heading">Sign In</h1>
          <p className="signup-para">Enter your account details below</p>
          <input
            type="text"
            value={email}
            placeholder="Email address"
            className="signup-input"
            onChange={this.emailValue}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="signup-input"
            onChange={this.passwordValue}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              defaultChecked={checked}
              onChange={this.checkedStatus}
            />
            <p className="checkbox-label">Keep me signed in</p>
          </div>
          <p className="error-msg">{checkedError}</p>
          <button type="submit" className="signup-button">
            Get Started
          </button>
          <p className="error-msg1">{loginError}</p>
          <p className="account-para">
            Don't have an account?{" "}
            <span className="sign-in-text" onClick={this.navigateSignup}>
              Create for free
            </span>
          </p>
        </form>
      </div>
    );
  }
}

export default Signin;
