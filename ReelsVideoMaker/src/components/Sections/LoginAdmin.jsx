import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../context/globalContext";
import styled from "styled-components";
import axios from "axios";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const globalContext = useGlobal();
  const [textEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      userId: textEmail,
      password: textPassword,
    });

    setShowLoader(true);

    await axios
      .post(
        "https://reelsmaker.in/api/admin/admin_login.php",
        data
      )
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        setShowLoader(false);
        if (response.data.status === true) {
          const adminData = response.data.data;

          globalContext.setAdminData(adminData);

          navigate('/admin/adminDash')

          setTimeout(() => {
            alert(response.data.message)
          }, 500);

        } else {
          alert(response.data.message)
        }
      })
      .catch((error) => {
        console.log(error);
        setShowLoader(false);
        alert(error.response.data.message)
      });
  };

  return (
    <Wrapper className="whiteBg">
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
                </div>
              </form>
            </div>
          </div>
          <div className="col-xs-0 col-sm-0 col-md-3 col=lg-3" />
        </div>
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
