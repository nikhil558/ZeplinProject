import { Component } from "react";
import HomePage from "../HomePage";
import Signin from "../Signin";

class LoginForm extends Component {
  state = {
    isLogin: false,
  };

  onLoginSuccess = () => {
    this.setState({ isLogin: true });
  };
  onClickLogout = () => {
    this.setState({ isLogin: false });
  };
  render() {
    const { isLogin } = this.state;
    const { SignupFunction, maintainData } = this.props;
    return (
      <div>
        {isLogin ? (
          <HomePage onClickLogout={this.onClickLogout} />
        ) : (
          <Signin
            SignupFunction={SignupFunction}
            onLoginSuccess={this.onLoginSuccess}
            maintainData={maintainData}
          />
        )}
      </div>
    );
  }
}

export default LoginForm;
