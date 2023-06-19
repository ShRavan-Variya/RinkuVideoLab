import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Download from "../../assets/img/ic_download.png";
import Timer from "./Timer";

export default function ProjectBoxDownload({ item, remainingTime, isTimer, action }) {
  const [isRunningTimer, setIsRunningTimer] = useState(isTimer);

  console.log('item data :: ' + JSON.stringify(item));

  const thumbnail = 'https://reelsmaker.in/apis/Reels/Cache/' + item.thumbnail;

  const handleTimerComplete = () => {
    setIsRunningTimer(false)
  }

  return (
    <Wrapper>
      <ImgBtn className="flexCenter">
        <img src={thumbnail} alt="office" />
      </ImgBtn>
      <BottomRow>
        <Flex1>
          <h3 className="font20 extraBold">{item.proj_name}</h3>
          <p className="font13">{item.title}</p>
        </Flex1>
        {!item.downloadLink && isRunningTimer ? (
            <Timer
              remainingTime={remainingTime}
              onTimerComplete={() => handleTimerComplete()}
            />
          ) : (
            <FlexButton className="flexCenter lightBg">
              <img src={Download} alt="office" onClick={() => {
                action(item)
              }} />
            </FlexButton>
          )
        }
      </BottomRow>
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
const ImgBtn = styled.div`
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
  video {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
  }
  :hover > video {
    opacity: 0.5;
  }
`;
const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
`
const Flex1 = styled.div`
  flex: 1;
`
const FlexButton = styled.div`
  width: 30px;
  height: 30px;
  padding: 5;
  border-radius: 5rem;
  border: 2px solid #7620ff;
  img {
    width: 15px;
    height: 15px;
  }
`
