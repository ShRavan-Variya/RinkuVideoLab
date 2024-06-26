import React, { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";
import styled from "styled-components";
import axios from "axios";
import ProjectBoxDownload from "../../Elements/ProjectBoxDownload";
import { useGlobal } from "../../../context/globalContext";
import NoData from "../../../assets/img/ic_noData.png";
import moment from "moment";

export default function UserDisplay() {
  const globalContext = useGlobal();
  const userData = globalContext.userData;
  const [listOfData, setListOfData] = useState([]);
  const [showNoData, setShowNoData] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    doAddListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const doAddListData = async () => {
    const userId = userData.user_id;
    console.log(userData);
    setShowLoader(true);
    await axios
      .get(
        `https://reelsmaker.in/api/client/get_projects.php?userId=${userId}`
      )
      .then(async function (response) {
        if (response.data.status === true) {
          const listData = response.data.data;
          if (listData.length > 0) {
            const listLength = listData.length;
            let currentItem = 0;
            const newList = [];

            do {
              const dataItem = listData[currentItem];
              const zipPath = dataItem.data_list.folder;
              const dataImage = await extractThumbnailFromZip(
                "https://reelsmaker.in/api/client/get_zipThumb.php",
                zipPath
              );

              if ( dataImage.result) {
                const data = {
                  order_id: dataItem.order_id,
                  proj_name: dataItem.proj_name,
                  title: dataItem.title,
                  notes: dataItem.notes,
                  song: dataItem.song,
                  zipId: dataItem.zipId,
                  user_id: dataItem.user_id,
                  user_name: dataItem.user_name,
                  amount: dataItem.amount,
                  paymentId: dataItem.paymentId,
                  image: dataItem.image,
                  status: dataItem.status,
                  thumbnail: dataImage.fileName,
                  downloadLink: dataItem.downloadLink,
                  downloadTime: dataItem.downloadTime,
                  created_at: dataItem.created_at,
                  updated_at: dataItem.updated_at,
                  data_list: {
                    data_id: dataItem.data_list.data_id,
                    filename: dataItem.data_list.filename,
                    folder: dataItem.data_list.folder,
                    created_at: dataItem.data_list.created_at,
                    updated_at: dataItem.data_list.updated_at,
                  },
                };
  
                newList.push(data);
                currentItem++;
              } else {
                currentItem++;
              }

              
            } while (currentItem < listLength);

            if (currentItem >= listLength) {
              setListOfData(newList);
              setShowLoader(false);
              setShowNoData(false);
            }
          } else {
            setShowLoader(false);
            setShowNoData(true);
          }
        } else {
          setShowLoader(false);
          setShowNoData(true);
        }
      })
      .catch((error) => {
        setShowLoader(false);
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
      });
  };

  const extractThumbnailFromZip = async (url, zipPath) => {
    const data = JSON.stringify({
      zipPath: zipPath,
    });

    const response = await axios.post(url, data)
    if (response.data.status === true) {
      return { result: true, fileName: response.data.zipFileName };
    } else {
      return { result: false, fileName: "" };
    }
  };

  return (
    <Wrapper className="whiteBg">
      <div className="container fullyCenterCard">
        <div style={{ marginTop: "100px", paddingBottom: "200px" }}>
          {showNoData ? (
            <ImageEmpty className="flexJustifyCenter">
              <img src={NoData} alt="office" />
            </ImageEmpty>
          ) : (
            <Masonry columnsCount={4} gutter="20px">
              {listOfData.map((item, index) => {
                const targetDateTime = moment(new Date(item.created_at))
                  .add(2, "hours")
                  .toDate()
                  .getTime();
                let remainingTime = 0;
                if(item.downloadLink !== undefined && item.downloadLink !== null) {
                  if (targetDateTime > new Date().getTime()) {
                    remainingTime = moment(new Date(targetDateTime)).diff();
                  }
                }


                console.log('====================================');
                console.log('targetDateTime ::: ', targetDateTime);
                console.log('remainingTime ::: ', remainingTime);
                console.log('====================================');

                return (
                  <ProjectBoxDownload
                    key={index}
                    item={item}
                    remainingTime={remainingTime}
                    isTimer={remainingTime > 0}
                    action={(item) => {
                      console.log("DONWLOAD");

                      // const filePath = '../../../../../Reels/Row/';
                      // const fileName = item.downloadLink.split("/").pop();
                      // const fullFileNamePath = filePath + fileName;

                      // console.log(
                      //   fullFileNamePath
                      // );
                      // // Create a blob with the data
                      
                      // const fileUrl = 'https://reelsmaker.in/api/Reels/Cache/' + item.thumbnail;
                      // // const blob = new Blob([fileUrl], { type: 'video/mp4' }); // Replace 'video/mp4' with the appropriate MIME type
                      // // const url = URL.createObjectURL(blob);

                      // const link = document.createElement('a');
                      // link.href = fileUrl;
                      // link.download = item.thumbnail;
                      // link.click();
                      // URL.revokeObjectURL(fileUrl);
                      console.log("item :: ", item);
                      if (item.downloadLink) {
                        const filename = item.downloadLink;
                        const downloadLink = `https://reelsmaker.in/api/Reels/Row/${filename}`;
                        window.open(downloadLink, '_blank');
                      } else {
                        alert("Please contact the admin at +919377603050")
                      }
                    }}
                  />
              )})}
            </Masonry>
          )}
        </div>
      </div>
      {showLoader ? (
        <div className="popup">
          <div className="popup-loader">
            <div className="loader" />
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const ImageEmpty = styled.div`
  padding: 100px 0 0 0;
  img {
    width: 350px;
    height: 350px;
  }
`;
// const TopWrapper = styled.div`
//   margin: 0;
//   @media (max-width: 960px) {
//     margin: 0 10px;
//   }
// `;
// const ImageWrapper = styled.img`
//   height: 100px;
//   width: 100px;
//   @media (max-width: 370px) {
//     height: 70px;
//     width: 70px;
//   }
// `;
// const UserTitleWrapper = styled.div`
//   padding-left: 20px;
//   padding-right: 20px;
//   @media (max-width: 370px) {
//     padding-left: 15px;
//     padding-right: 15px;
//   }
// `;
// const TextTitle = styled.div`
//   font-size: 20px;
//   font-weight: 800;
//   @media (max-width: 960px) {
//     font-size: 17px;
//   }
//   @media (max-width: 370px) {
//     font-size: 15px;
//   }
// `;
// const TextEmail = styled.div`
//   font-size: 18px;
//   font-weight: 600;
//   @media (max-width: 960px) {
//     font-size: 16px;
//   }
//   @media (max-width: 370px) {
//     font-size: 14px;
//   }
// `;
// const CardWrapper = styled.div`
//   width: 100%;
//   margin: 5px 10px;
//   box-shadow: 0 5px 12px 0 grey;
//   background: white;
//   border-radius: 10px;
//   overflow: hidden;
// `;
// // const TransparentWrapper = styled.div`
// //   width: 100%;
// // `;
// const ItemTitle = styled.div`
//   font-size: 15px;
//   font-weight: 600;
//   @media (max-width: 960px) {
//     font-size: 13px;
//   }
//   @media (max-width: 370px) {
//     font-size: 13px;
//   }
// `;
// const ItemSubTitle = styled.div`
//   font-size: 14px;
//   font-weight: 400;
//   @media (max-width: 960px) {
//     font-size: 12px;
//   }
//   @media (max-width: 370px) {
//     font-size: 12px;
//   }
// `;
