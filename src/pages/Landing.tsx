import { loginFormConfig } from "../config";
import LoginSignup from "./LoginSignup";

const Landing = () => {
  return (
    <div className="fixed rounded-[8px] max-w-[500px] w-[100%] px-[15px] py-[25px] bg-[#27292D] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-gradient">
      <LoginSignup
        toggleLogin={() => {}}
        formConfig={loginFormConfig}
        heading="WELCOME BACK"
        subHeading="Log into your account"
        submitText="Login Now"
        footerText="Not registered yet?"
        footerToggleText="Register"
      />
    </div>
  );
};

export default Landing;
