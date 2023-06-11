import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import JSZip from 'jszip';
import { useGlobal } from "../../context/globalContext";

export default function Upload() {
  const globalContext = useGlobal();
  const userData = globalContext.userData;
  const navigate = useNavigate();
  const [textProjectName, setTextProjectName] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [textTitle, setTextTitle] = useState("");
  const [textNotes, setTextNotes] = useState("");
  const [textSong, setTextSong] = useState("");

  const [files, setFiles] = useState([]);

  const saveFile = (e) => {
    const files = Array.from(e.target.files);
    setFiles(files);
  };

  const togglePayment = () => {
    setShowPayment(!showPayment);
  };

  const createZipArchive = async (e) => {
    e.preventDefault();

    try {
      const currentDate = moment().format('DD_MM_YY-HH:mm:ss');
      const zipFileName = `UserData_${currentDate}.zip`;

      const zip = new JSZip();
      const filePromises = files.map(async (file) => {
        const fileData = await file.arrayBuffer();
        zip.file(file.name, fileData);
      });

      const file0 = files[0];

      const reader = new FileReader();
      let thumbFile;
      reader.onloadend = () => {
        const fileData = reader.result;
    
        const thumbBlob = new Blob([fileData], { type: 'image/jpeg' });
        thumbFile = new File([thumbBlob], 'thumbnail.jpg', { type: 'image/jpeg' });
    
      };
  
      if (file0) {
        reader.readAsArrayBuffer(file0);
      }
      zip.file('thumbnail.jpg', thumbFile);

      await Promise.all(filePromises);
      const zipBlob = await zip.generateAsync({ type: 'blob' });
  
      const formData = new FormData();
      formData.append('dataFile', zipBlob, zipFileName);

      const res = await axios.post('http://localhost:80/reelsvideoapis/client/uploadData.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.status) {
        const data_id = res.data.data.data_id;
        onSubmitClick(data_id)
      } else {
        console.error('Error archive:', res);
        alert(res.data.message)
      }
    } catch (error) {
      console.error('Error creating zip archive:', error);
    }
  };


  const onUploadClick = async (e) => {
    e.preventDefault();

    const newList = [];
    const fileLength = files.length;
    let currentItem = 0;

    do {
      const formData = new FormData();
      formData.append("dataFile", files[currentItem]);
      try {
        const res = await axios.post(
          "http://localhost:80/reelsvideoapis/client/uploadData.php",
          formData
        )

        if (res.data.status) {
          const uploadedData = res.data.data;
          newList.push(uploadedData);
          currentItem++;
        } else {
          alert(res.data.message)
        }
      } catch (ex) {
        console.log(ex);
      }

    } while (currentItem < fileLength);

    if (currentItem === fileLength) {
      onSubmitClick(newList)
    }
  }

  const onSubmitClick = async (data_id) => {
    const userId = userData.user_id;
    const userName = userData.user_name;

    const data = JSON.stringify({
      projectName: textProjectName,
      title: textTitle,
      notes: textNotes,
      song: textSong,
      zipId: data_id,
      userId: userId,
      userName: userName,
      amount: "100",
      status: 1,
    });
    await axios
      .post(
        "http://localhost:80/reelsvideoapis/client/clientAddProj.php",
        data
      )
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          navigate(-1);

          alert(response.data.message)
        } else {
          alert(response.data.message)
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const uploadFiles = (files) => {
    const formData = new FormData();
    const length = files.length;
    for (let key in files) {
      if (key < length) {
        formData.append("videos", files[key]);
        console.log(Object.fromEntries(formData));

        // Do api call here
      }
    }
    console.log("====================================");
    console.log(formData.getAll("videos"));
    console.log("====================================");
  };

  return (
    <Wrapper className="whiteBg">
      <div class="container account_form" data-aos="fade-up" data-aos-delay="0">
        <form>
          <div className="row flexJustifyCenter">
            <div className="col-xs-12 col-sm-12 col-md-6 col=lg-6">
              <h4 style={{ margin: "10px 0 0 0" }}>Intro &amp; Notes</h4>
              <h5 style={{ margin: "0 0 20px 0", fontWeight: "600" }}>
                If you want to add title and other thing in your video please
                add here..
              </h5>
              <div class="default-form-box">
                <label style={{ margin: "10px 0 0 0" }}>Project Name</label>
                <input
                  autoFocus
                  type="text"
                  maxLength="25"
                  placeholder="Enter Project Name"
                  value={textProjectName}
                  onChange={(e) => {
                    setTextProjectName(e.target.value);
                  }}
                />
              </div>
              <div class="default-form-box">
                <label style={{ margin: "10px 0 0 0" }}>Title</label>
                <input
                  autoFocus
                  type="text"
                  maxLength="25"
                  placeholder="Enter Title"
                  value={textTitle}
                  onChange={(e) => {
                    setTextTitle(e.target.value);
                  }}
                />
              </div>
              <div class="default-form-box">
                <label style={{ margin: "10px 0 0 0" }}>Notes</label>
                <input
                  type="text"
                  maxLength="25"
                  placeholder="Enter Notes"
                  value={textNotes}
                  onChange={(e) => {
                    setTextNotes(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col=lg-6">
              <Title>Select or add Song</Title>
              <h5 style={{ margin: "0 0 20px 0", fontWeight: "600" }}>
                Please enter song to add in your reel...
              </h5>
              <div class="default-form-box">
                <label style={{ margin: "10px 0 0 0" }}>Song</label>
                <input
                  type="text"
                  maxLength="25"
                  placeholder="Enter Song Name"
                  value={textSong}
                  onChange={(e) => {
                    setTextSong(e.target.value);
                  }}
                />
              </div>

              <Title style={{ margin: "70px 0 0 0" }}>Upload data</Title>
              <h5 style={{ margin: "0 0 20px 0", fontWeight: "600" }}>
                Please add your videos and images for reel.
              </h5>
              <div class="default-form-box">
                <label style={{ margin: "10px 0 0 0" }}>Select files</label>
                <input
                  type="file"
                  name="videos"
                  id="videos"
                  multiple
                  itemType=""
                  accept=".mp4, .mkv, .avi, .jpg, .jpeg, .png"
                  // accept=".mp4, .mkv, .avi"
                  onChange={saveFile}
                />
              </div>
            </div>
            {!showPayment ? (
              <div class="login_submit">
                <button
                  class="btn btn-md btn-black-default-hover mb-4"
                  style={{ padding: "10px 50px", margin: "30px 0 0 0" }}
                  type="submit"
                  onClick={(e) => {
                    // togglePayment();
                    // e.preventDefault();
                    createZipArchive(e);
                  }}
                >
                  Upload
                </button>
              </div>
            ) : (
              <GooglePayButton
                style={{ padding: "10px 50px", margin: "30px 0 0 0" }}
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                      },
                      // tokenizationSpecification: {
                      //   type: "PAYMENT_GATEWAY",
                      //   parameters: {
                      //     gateway: "example",
                      //     gatewayMerchantId: "exampleGatewayMerchantId",
                      //   },
                      // },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "12345678901234567890",
                    merchantName: "Demo Merchant",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: "100.00",
                    currencyCode: "INR",
                    countryCode: "IN",
                  },
                  shippingAddressRequired: false,
                  callbackIntents: ["PAYMENT_AUTHORIZATION"],
                }}
                buttonType={"pay"}
                onLoadPaymentData={(paymentRequest) => {
                  console.log("load payment data", paymentRequest);
                }}
                onPaymentAuthorized={(paymentData) => {
                  console.log("onPaymentAuthorized" + paymentData);
                  return { transactionState: "SUCCESS" };
                }}
              />
            )}
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 160px;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.h4`
  margin-top: 10px;
  @media (max-width: 960px) {
    margin-top: 70px;
  }
`;
