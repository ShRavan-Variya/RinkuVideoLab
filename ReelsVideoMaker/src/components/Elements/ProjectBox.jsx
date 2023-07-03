import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action}) {
  const image = 'https://reelsmaker.in/apis/Reels/DashData/' + img;

  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={image} alt="project"></img>
      </ImgBtn>
      {/* <h3 className="font20 extraBold">{title}</h3>
      <p className="font13">{text}</p> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 10px 0;
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
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
  }
  :hover > img {
    opacity: 0.5;
  }
`;