import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../../assets/img/projects/1.png";

export default function UserDisplay() {
  return (
    <Wrapper className="whiteBg">
      <div className="container fullyCenterCard">
        <div className="imageCard">
              <img className="userImage" src={userImage} alt={userImage} />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 150px;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;