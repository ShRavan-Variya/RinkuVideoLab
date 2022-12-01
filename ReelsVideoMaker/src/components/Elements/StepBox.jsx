import React from "react";
import styled from "styled-components";

export default function StepBox({ item, title }) {
  return (
    <Wrapper className="flex flexColumn flexCenter">
      <div style={{ height: '45px', width: '80px'}} className="borderRound darkColorNew flexCenter">
        <ItemStyle className="font20 extraBold darkColorNew">{item}</ItemStyle>
      </div>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 200px;
`;
const ItemStyle = styled.h2`
  padding: 5px 0 0 0;
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px 0 0 0;
  @media (max-width: 860px) {
    padding: 5px 0 0 0;
  }
`;
