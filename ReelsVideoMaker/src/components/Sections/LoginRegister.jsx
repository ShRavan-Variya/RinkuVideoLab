import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Cookies from "universal-cookie";
import axios from "axios";
import { useGlobal } from "../../context/globalContext";

export default function LoginRegister() {
  const cookies = new Cookies();
  const globalContext = useGlobal();
  const navigate = useNavigate();
  const userId = globalContext.userId;
  const [showLogin, setShowLogin] = useState(true);
  const [textFullName, setTextFullName] = useState("");
  const [textUserName, setTextUserName] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textMobile, setTextMobile] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const onLogin = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      email: textEmail,
      password: textPassword,
    });
    setShowLoader(true);

    await axios
      .post(
        "https://reelsmaker.in/apis/client/client_login.php",
        data
      )
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        setShowLoader(false);
        if (response.data.status === true) {
          const userData = response.data.data;
          console.log("userData :: " + JSON.stringify(userData));

          globalContext.setLogin(true);
          globalContext.setUserId(userData.user_id);
          globalContext.setUserData(userData);

          cookies.set('userData', userData, { path: '/' });

          navigate(-1)

          alert(response.data.message)

        } else {
          alert(response.data.message)
        }
      })
      .catch((error) => {
        setShowLoader(false);
        alert(error.response.data.message)
      });
  };

  const onRegister = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      full_name: textFullName,
      user_name: textUserName,
      email: textEmail,
      mobile: textMobile,
      password: textPassword,
    });
    setShowLoader(true);

    await axios
      .post(
        "https://reelsmaker.in/apis/client/client_register.php",
        data
      )
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        setShowLoader(false);
        if (response.data.status === true) {
          const userData = response.data.data;
          console.log("userData :: " + JSON.stringify(userData));

          globalContext.setLogin(true);
          globalContext.setUserId(userData.user_id);
          globalContext.setUserData(userData);

          cookies.set("userData", userData, { path: "/" });

          navigate(-1);

          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        setShowLoader(false);
        alert(error.response.data.message);
      });
  };

  return (
    <Wrapper className="whiteBg">
      {showLogin ? (
        <div className="container row">
          <div className="col-xs-0 col-sm-0 col-md-3 col=lg-3" />
          <div className="col-xs-12 col-sm-12 col-md-6 col=lg-6">
            <div className="account_form" data-aos="fade-up" data-aos-delay="0">
              <h3>login</h3>
              <form onSubmit={onLogin}>
                <div className="default-form-box">
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    required
                    autoFocus
                    type="email"
                    maxLength="25"
                    placeholder="Email"
                    value={textEmail}
                    onChange={(e) => {
                      setTextEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="default-form-box">
                  <label>
                    Passwords <span>*</span>
                  </label>
                  <input
                    required
                    type="password"
                    maxLength="25"
                    placeholder="Password"
                    value={textPassword}
                    onChange={(e) => {
                      setTextPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="login_submit">
                  <button
                    className="btn btn-md btn-black-default-hover mb-4"
                    type="submit"
                  >
                    login
                  </button>
                  <label className="mb-4" for="offer">
                    <ButtonTransParent>Lost your password?</ButtonTransParent>
                  </label>
                  <ButtonTransParent onClick={() => toggleLogin()}>
                    Don't have account?
                  </ButtonTransParent>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xs-0 col-sm-0 col-md-3 col=lg-3" />
        </div>
      ) : (
        <div className="container row">
          <div className="col-xs-0 col-sm-0 col-md-3 col=lg-3" />
          <div className="col-xs-12 col-sm-12 col-md-6 col=lg-6">
            <div
              className="account_form register"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Register</h3>
              <form onSubmit={onRegister}>
                <div className="default-form-box">
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <input
                    required
                    autoFocus
                    type="text"
                    maxLength="25"
                    placeholder="Full Name"
                    value={textFullName}
                    onChange={(e) => {
                      setTextFullName(e.target.value);
                    }}
                  />
                </div>
                <div className="default-form-box">
                  <label>
                    User Name <span>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    maxLength="25"
                    placeholder="User Name"
                    value={textUserName}
                    onChange={(e) => {
                      setTextUserName(e.target.value);
                    }}
                  />
                </div>
                <div className="default-form-box">
                  <label>
                    Email address <span>*</span>
                  </label>
                  <input
                    required
                    type="email"
                    maxLength="25"
                    placeholder="Email"
                    value={textEmail}
                    onChange={(e) => {
                      setTextEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="default-form-box">
                  <label>
                    Mobile <span>*</span>
                  </label>
                  <input
                    required
                    type="number"
                    maxLength="10"
                    placeholder="Mobile"
                    value={textMobile}
                    onChange={(e) => {
                      setTextMobile(e.target.value);
                    }}
                  />
                </div>
                <div className="default-form-box">
                  <label>
                    Passwords <span>*</span>
                  </label>
                  <input
                    required
                    type="password"
                    maxLength="16"
                    placeholder="Password"
                    value={textPassword}
                    onChange={(e) => {
                      setTextPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="login_submit">
                  <button
                    className="btn btn-md btn-black-default-hover mb-4"
                    type="submit"
                  >
                    Register
                  </button>
                  <ButtonTransParent onClick={() => toggleLogin()}>
                    Already have account?
                  </ButtonTransParent>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xs-0 col-sm-0 col-md-3 col=lg-3" />
        </div>
      )}
      {showLoader ? (
        <div className="popup">
          <div className="popup-loader">
            <div className="loader" />
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 250px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    padding-top: 150px;
    flex-direction: column;
  }
`;

const ButtonTransParent = styled.button`
  color: #777;
  background-color: transparent;
  border: 0;
  outline: none;
`;
