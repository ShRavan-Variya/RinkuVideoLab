import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact(props) {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper style={{position: props.isHome ? 'relative' : 'fixed'}}>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "10px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoImg />
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                Reels Maker
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="orangeColor font13">Reels Maker</span> All Right
              Reserved
            </StyleP>

            {/* {props.isHome ? (
              <Link
                className="whiteColor animate pointer font13"
                to="home"
                smooth={true}
                offset={-80}
              >
                Back to top
              </Link>
            ) : null} */}
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  // position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
