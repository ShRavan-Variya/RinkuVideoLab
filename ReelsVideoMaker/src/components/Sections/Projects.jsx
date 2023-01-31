/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Masonry from "react-responsive-masonry"
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";

export default function Projects({data}) {
  return (
    <Wrapper id="projects">
      <div className="whiteBg" style={{ padding: "30px 0 80px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
          <Masonry columnsCount={4} gutter="2%">
            {data.map((item, index) => (
              <ProjectBox
                key={index}
                img={item.image}
                title={item.title}
                text={item.subtitle}
                action={() => alert("clicked")}
              />
            ))}
          </Masonry>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
