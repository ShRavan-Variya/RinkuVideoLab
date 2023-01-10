import React from "react";
import { motion } from 'framer-motion'
import styled from "styled-components";
import data from './data.json'
import { useGlobal } from "../../../context/globalContext";
import userImage from "../../../assets/img/projects/1.png";
import GalleryCard from './GalleryCard/index'

export default function UserDisplay() {
  const globalContext = useGlobal();
  const userData = globalContext.userData;

  console.log(userData);

  return (
    <Wrapper className="whiteBg">
      <div className="container fullyCenterCard">
        <TopWrapper className="row">
          <ImageWrapper src={userImage} alt={userImage} />
          <UserTitleWrapper>
            <TextTitle className="userTitle">{userData.full_name}</TextTitle>
            <TextEmail className="userEmail">{userData.email}</TextEmail>
          </UserTitleWrapper>
        </TopWrapper>
        <List
          id="macy-grid"
          initial="hide"
          animate="show"
          // variants={galleryAnimation}
        >
          {data.map((item, index) => {
            return <GalleryCard {...item} id={index} key={index} />
          })}
        </List>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 85px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const TopWrapper = styled.div`
  margin: 0;
  @media (max-width: 960px) {
    margin: 0 10px 0 10px;
  }
`;
const ImageWrapper = styled.img`
  height: 90px;
  width: 90px;
  @media (max-width: 370px) {
    height: 70px;
    width: 70px;
  }
`;
const UserTitleWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 370px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
const TextTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  @media (max-width: 960px) {
    font-size: 17px;
  }
  @media (max-width: 370px) {
    font-size: 15px;
  }
`;
const TextEmail = styled.div`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 960px) {
    font-size: 16px;
  }
  @media (max-width: 370px) {
    font-size: 14px;
  }
`;
const List = styled(motion.ul)`
  margin: 0;
  img {
    width: 100%;
  }
`
