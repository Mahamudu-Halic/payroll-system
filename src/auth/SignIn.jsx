import AuthAccount from "../components/AuthAccount";
import WelcomeDash from "../components/WelcomeDash";
import "./auth.css";
const SignIn = () => {
  return (
    <div className="authForm">
      <WelcomeDash />
      <AuthAccount title={'Sign In'} url={'/signup'}/>

    </div>
  );
};

export default SignIn;
