import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Download from "../../assets/img/ic_download.png";

export default function ProjectBoxDownload({ item, action }) {

  let imageFile;
  let isVideo = false;

  if (!item.image) {
    console.log(item.data_list);
    const dataList = item.data_list;
    console.log(dataList);
    if (dataList && dataList.length > 0) {
      const filename = dataList[0].filename
      imageFile = 'http://localhost:8080/reelsvideoapis/Reels/Row/' + filename

      const types = new Map([["jpg", "img"], ["jpeg", "img"], ["png", "img"], ["mp4", "video"], ["mkv", "video"], ["avi", "video"]])
      const extension = filename.split(".").pop().toLowerCase();

      const element = types.get(extension)

      if (element === 'img') {
        isVideo = false;
      } else {
        isVideo = true;
      }
      
    }
  }

  const fileName = item.downloadLink.split("/").pop();


  return (
    <Wrapper>
      <ImgBtn className="flexCenter">
        {item.image ? (
          <img src={item.image} alt="office" />
        ) : item.data_list && item.data_list[0].filename !== '' && isVideo ? (
          <>
            <video height={'100%'} width={'100%'} src={imageFile} />
          </>
        ) : item.data_list && item.data_list[0].filename !== '' ? (
          <>
            <img src={imageFile} alt="office" />
          </>
        ) : null}
      </ImgBtn>
      <BottomRow>
        <Flex1>
          <h3 className="font20 extraBold">{item.proj_name}</h3>
          <p className="font13">{item.title}</p>
        </Flex1>
        <Link
          to={item.downloadLink}
          target="_blank"
          download={fileName}
        >
          <FlexButton className="flexCenter lightBg">
            <img src={Download} alt="office" />
          </FlexButton>
        </Link>
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
