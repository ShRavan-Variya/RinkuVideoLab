import React, { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry"
import styled from "styled-components";
import axios from "axios";
import ProjectBoxDownload from "../../Elements/ProjectBoxDownload";
import { useGlobal } from "../../../context/globalContext";

export default function UserDisplay() {
  const globalContext = useGlobal();
  const userData = globalContext.userData;
  const [listOfData, setListOfData] = useState([]);

  useEffect(() => {
    doAddListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doAddListData = async () => {
    const userId = userData.user_id
    console.log(userData);
    await axios
      .get(`http://localhost:8080/reelsvideoapis/client/get_projects.php?userId=${userId}`)
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          const listData = response.data.data;
          if (listData.length > 0) {
            setListOfData(listData);
          }
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  }

  return (
    <Wrapper className="whiteBg">
      <div className="container fullyCenterCard">
        <div style={{ marginTop: '100px', paddingBottom: '200px' }}>
          <Masonry columnsCount={4} gutter="20px">
            {listOfData.map((item, index) => (
              <ProjectBoxDownload
                key={index}
                img={item.image}
                title={item.proj_name}
                text={item.title}
                action={() => alert("clicked")}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const TopWrapper = styled.div`
  margin: 0;
  @media (max-width: 960px) {
    margin: 0 10px;
  }
`;
const ImageWrapper = styled.img`
  height: 100px;
  width: 100px;
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
const CardWrapper = styled.div`
  width: 100%;
  margin: 5px 10px;
  box-shadow: 0 5px 12px 0 grey;
	background: white;
	border-radius: 10px;
	overflow: hidden;
`;
// const TransparentWrapper = styled.div`
//   width: 100%;
// `;
const ItemTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  @media (max-width: 960px) {
    font-size: 13px;
  }
  @media (max-width: 370px) {
    font-size: 13px;
  }
`;
const ItemSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 960px) {
    font-size: 12px;
  }
  @media (max-width: 370px) {
    font-size: 12px;
  }
`;
