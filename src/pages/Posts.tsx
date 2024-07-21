import Post from "../components/Post/Post";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";
import { useEffect, useRef, useState } from "react";
import LoginSignup from "./LoginSignup";
import { loginFormConfig, postConfig, signupFormConfig } from "../config";

const modalContainer = document.createElement("div");
document.body.appendChild(modalContainer);

const Posts = () => {
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const modalContainerRef = useRef<HTMLElement>(modalContainer);

  const handleBtnClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      modalContainer.className =
        "fixed h-[100vh] w-[100vw] flex justify-center items-center flex-col bg-[#0003] p-[12vh] top-0 left-0 bg-opacity-30 backdrop-blur-sm";
    } else {
      modalContainer.className = "";
    }
  }, [showModal]);

  return (
    <>
      <div className="rounded-[8px] max-w-[700px] w-[100%] px-[15px] py-[25px]">
        <div className="flex gap-4 flex-col items-start text-[#FFFFFF]">
          <h2 className="text-[28px]">Hello Jane</h2>
          <h4 className="text-[16px] text-[#7F8084]">
            How are you doing today? Would you like to share something with the
            community 🤗
          </h4>
          <div className="flex gap-4 flex-col items-start mt-3">
            {postConfig.map((item) => (
              <Post key={item.id} {...item} onBtnClick={handleBtnClick} />
            ))}
          </div>
        </div>
      </div>
      {createPortal(
        <Modal isOpen={showModal} onClose={handleClose}>
          {showLogin ? (
            <LoginSignup
              handleSubmit={handleClose}
              toggleLogin={() => setShowLogin(false)}
              formConfig={loginFormConfig}
              heading="WELCOME BACK"
              subHeading="Log into your account"
              submitText="Login Now"
              footerText="Not registered yet?"
              footerToggleText="Register"
            />
          ) : (
            <LoginSignup
              handleSubmit={handleClose}
              toggleLogin={() => setShowLogin(true)}
              formConfig={signupFormConfig}
              heading="SIGN UP"
              subHeading="Create an account to continue"
              submitText="Continue"
              footerText="Already have and account?"
              footerToggleText="Login"
            />
          )}
        </Modal>,
        modalContainerRef.current
      )}
    </>
  );
};

export default Posts;
