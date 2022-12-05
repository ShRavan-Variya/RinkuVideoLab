import React, { useState } from "react";
import styled from "styled-components";
import GooglePayButton from "@google-pay/button-react";
import axios from "axios";
import { useGlobal } from "../../context/globalContext";

export default function Upload() {
  const globalContext = useGlobal();
  const userData = globalContext.userData;
  const [textProjectName, setTextProjectName] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [textTitle, setTextTitle] = useState("");
  const [textNotes, setTextNotes] = useState("");
  const [textSong, setTextSong] = useState("");

  const togglePayment = () => {
    setShowPayment(!showPayment);
  };

  const onSubmitClick = async (e) => {
    e.preventDefault();

    const listData = ["abc", "def", "ghi"];

    const userId = userData.user_id;
    const userName = userData.user_name;

    const data = JSON.stringify({
      projectName: textProjectName,
      title: textTitle,
      notes: textNotes,
      song: textSong,
      dataList: JSON.stringify(listData),
      userId: userId,
      userName: userName,
      amount: "100",
    });

    console.log('data : ' + data);

    await axios
      .post(
        "http://localhost:8080/reelsvideoapis/client/clientAddProj.php",
        data
      )
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        if (response.data.status === true) {
          // const userData = response.data.data;

          console.log("====================================");
          console.log("RES :: " + response);
          console.log("====================================");
          // alert(response.data.message)
        } else {
          console.log("====================================");
          console.log("ERR RES :: " + response);
          console.log("====================================");
          // alert(response.data.message)
        }
      })
      .catch((error) => {
        console.log("====================================");
        console.log("ERR :: " + JSON.stringify(error));
        console.log("====================================");
        // alert(error.response.data.message);
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
                  onChange={(e) => {
                    // setVideos(e.target.files);
                    uploadFiles(e.target.files);
                  }}
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
                    onSubmitClick(e);
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
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleGatewayMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "12345678901234567890",
                    merchantName: "Demo Merchant",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: "1.00",
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
