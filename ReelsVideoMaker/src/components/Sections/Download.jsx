import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DownloadItem from "./DownloadItem";

export default function Downloads() {
  const [listOfDownloads, setListOfDownloads] = useState([]);

  useEffect(() => {
    doSetData();
  }, []);

  const doSetData = () => {
    const downloadList = [];
    for (let i = 0; i < 10; i++) {
      let date = new Date();
      let currentTime = date.getTime();
      downloadList.push({
        projectName: "My Short Video",
        title: "Wedding",
        createdAt: date,
        downloadId: Math.floor(Math.random() * 2),
        downloadAt: new Date(currentTime + 2 * 60 * 1000),
        download: "https://www.google.com",
      });
    }
    setListOfDownloads(downloadList);
  };

  return (
    <Wrapper className="whiteBg">
      <div class="container">
        <UlWrapper className="card_box row">
          {listOfDownloads.map((item, index) => (
            <DownloadItem item={item} index={index} />
          ))}
        </UlWrapper>
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
const UlWrapper = styled.ul`
  flexdirection: "column";
  padding-top: 25px;
  padding-bottom: 25px;
`;
