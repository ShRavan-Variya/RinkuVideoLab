import React from "react";
import styled from "styled-components";

export default function ProjectBoxDownload({ img, title, text, action}) {
  return (
    <Wrapper>
      <ImgBtn className="flexCenter" onClick={action ? () => action() : null}>
        <img src={img} alt="office" />
      </ImgBtn>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;
const ImgBtn = styled.button`
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0 0 10px 0;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  }
  :hover > img {
    opacity: 0.5;
  }
`;