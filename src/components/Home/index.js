import { Component } from "react";
import Signup from "../Signup";
import LoginForm from "../LoginForm";

let maintainData = [];

class Home extends Component {
  state = {
    haveAccount: false,
  };

  SigninFunction = () => {
    this.setState({ haveAccount: true });
  };

  SignupFunction = () => {
    this.setState({ haveAccount: false });
  };

  pushUserData = (email, company, password) => {
    let obj1 = {
      email: email,
      company: company,
      password: password,
    };
    maintainData.push(obj1);
  };

  render() {
    const { haveAccount } = this.state;
    return (
      <div>
        {haveAccount ? (
          <LoginForm
            SignupFunction={this.SignupFunction}
            maintainData={maintainData}
          />
        ) : (
          <Signup
            SigninFunction={this.SigninFunction}
            pushUserData={this.pushUserData}
          />
        )}
      </div>
    );
  }
}

export default Home;
