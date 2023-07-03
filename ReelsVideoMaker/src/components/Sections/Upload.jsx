import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import {
//   CardNumberElement,
//   CardExpiryElement,
//   CardCvcElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import GooglePayButton from "@google-pay/button-react";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import JSZip from "jszip";
import { useGlobal } from "../../context/globalContext";

export default function Upload() {
  const stripe = useStripe();
  const elements = useElements();
  const globalContext = useGlobal();
  const userData = globalContext.userData;
  const navigate = useNavigate();
  const [textPayment, setTextPayment] = useState("");
  const [textProjectName, setTextProjectName] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [textTitle, setTextTitle] = useState("");
  const [textNotes, setTextNotes] = useState("");
  const [textSong, setTextSong] = useState("");

  const [files, setFiles] = useState([]);

  useEffect(() => {
    doGetPayment();
  }, []);

  const doGetPayment = async () => {
    setShowLoader(true);
    try {
      const response = await axios.get(
        "https://reelsmaker.in/apis/client/get_payments.php"
      );

      setShowLoader(false);
      if (response.data.status === true) {
        const data = response.data.data;
        setTextPayment(data.Payment);
      }
    } catch (error) {
      setShowLoader(false);
      alert("Something went wrong please try later!");
    }
  };

  const saveFile = (e) => {
    const files = Array.from(e.target.files);
    setFiles(files);
  };

  const togglePayment = () => {
    setShowPayment(!showPayment);
  };

  const filePromise = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileData = reader.result;
        resolve(fileData);
      };
      reader.readAsArrayBuffer(file);
    });
  };
  function convertDataUrlToBlob(dataUrl) {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  const generateVideoThumbnail = (videoFile) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      // video.preload = 'metadata';
      video.src = URL.createObjectURL(videoFile);
      video.onloadedmetadata = function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailDataUrl = canvas.toDataURL("image/jpeg");
        const thumbnailData = convertDataUrlToBlob(thumbnailDataUrl);
        resolve(thumbnailData);
      };
      video.onerror = function () {
        reject(new Error("Error loading video"));
      };
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!stripe || !elements) {
  //     return;
  //   }

  //   const cardNumberElement = elements.getElement(CardNumberElement);
  //   const cardExpiryElement = elements.getElement(CardExpiryElement);
  //   const cardCvcElement = elements.getElement(CardCvcElement);

  //   // Validate the card number
  //   if (!cardNumberElement._complete) {
  //     console.error("Please enter a valid card number");
  //     return;
  //   }

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: {
  //       number: cardNumberElement.value,
  //       exp_month: cardExpiryElement._card ? cardExpiryElement._card.exp_month : '',
  //       exp_year: cardExpiryElement._card ? cardExpiryElement._card.exp_year : '',
  //       cvc: cardCvcElement.value,
  //     },
  //   });

  //   if (error) {
  //     console.error("error : " + error.message);
  //   } else {
  //     console.log(paymentMethod);
  //     // Exclude circular references when logging the paymentMethod object
  //     // const loggablePaymentMethod = {
  //     //   id: paymentMethod.id,
  //     //   card: {
  //     //     brand: paymentMethod.card.brand,
  //     //     last4: paymentMethod.card.last4,
  //     //   },
  //     //   billing_details: {
  //     //     email: paymentMethod.billing_details.email,
  //     //   },
  //     // };

  //     console.log("Payment Method:", paymentMethod);

  //     // // Process the payment amount and details
  //     // console.log("Amount: ", amount);
  //     // console.log("Payment Method ID: ", paymentMethod.id);
  //     // console.log("Card Brand: ", paymentMethod.card.brand);
  //     // console.log("Card Last4: ", paymentMethod.card.last4);
  //     // console.log("Billing Email: ", paymentMethod.billing_details.email);

  //     // // Clear the payment form fields
  //     // cardNumberElement.current.clear();
  //     // cardExpiryElement.current.clear();
  //     // cardCvcElement.current.clear();
  //     // setAmount('');
  //   }
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error("CardElement not found");
      return;
    }

    const payment = Number(textPayment) * 100;

    setShowLoader(true);
    try {
      const response = await axios.get(
        "https://reelsmaker.in/apis/client/client_payment.php",
        {
          params: {
            amount: payment, // Replace with the actual payment amount
            currency: "INR", // Replace with the desired currency
            // Add any other required data here
          },
        }
      );


      console.log('====================================');
      console.log(response);
      console.log('====================================');

      const { clientSecret } = response.data;
      if (clientSecret !== undefined && clientSecret !== null) {
        // Use the client secret to confirm the payment and charge the user
        const { error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: cardElement,
            },
          }
        );

        if (error) {
          setShowLoader(false);
          console.error(error.message);
        } else {
          createZipArchive();
        }
      } else {
        setShowLoader(false);
      }
    } catch (error) {
      setShowLoader(false);
      console.error("Failed to fetch payment intent:", error);
    }
  };

  const createZipArchive = async () => {
    // e.preventDefault();

    try {
      const currentDate = moment().format("DD_MM_YY-HH:mm:ss");
      const zipFileName = `UserData_${currentDate}.zip`;

      const zip = new JSZip();
      const thumbnailFile = files.find((file) =>
        file.type.startsWith("image/")
      );
      const videoFile = files.find((file) => file.type.startsWith("video/"));

      const thumbnailDataPromise = thumbnailFile
        ? filePromise(thumbnailFile)
        : null;
      const videoThumbnailPromise = videoFile
        ? generateVideoThumbnail(videoFile)
        : null;

      const thumbnailData = await thumbnailDataPromise;
      const videoThumbnailData = await videoThumbnailPromise;

      if (thumbnailData) {
        const thumbBlob = new Blob([thumbnailData], { type: "image/jpeg" });
        const thumbFile = new File([thumbBlob], "thumbnail.jpg", {
          type: "image/jpeg",
        });
        zip.file("thumbnail.jpg", thumbFile);
      }

      if (videoThumbnailData) {
        const videoThumbBlob = new Blob([videoThumbnailData], {
          type: "image/jpeg",
        });
        const videoThumbFile = new File(
          [videoThumbBlob],
          "video-thumbnail.jpg",
          { type: "image/jpeg" }
        );
        zip.file("video-thumbnail.jpg", videoThumbFile);
      }

      if (videoFile) {
        const videoData = await filePromise(videoFile);
        zip.file(videoFile.name, videoData);
      }

      await Promise.all(
        files.map(async (file) => {
          const fileData = await file.arrayBuffer();
          zip.file(file.name, fileData);
        })
      );

      const zipBlob = await zip.generateAsync({ type: "blob" });

      const formData = new FormData();
      formData.append("dataFile", zipBlob, zipFileName);

      const res = await axios.post(
        "https://reelsmaker.in/apis/client/uploadData.php",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.status) {
        const data_id = res.data.data.data_id;
        onSubmitClick(data_id);
      } else {
        setShowLoader(false);
        console.error("Error archive:", res);
        alert(res.data.message);
      }
    } catch (error) {
      setShowLoader(false);
      console.error("Error creating zip archive:", error);
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
          "https://reelsmaker.in/apis/client/uploadData.php",
          formData
        );

        if (res.data.status) {
          const uploadedData = res.data.data;
          newList.push(uploadedData);
          currentItem++;
        } else {
          alert(res.data.message);
        }
      } catch (ex) {
        console.log(ex);
      }
    } while (currentItem < fileLength);

    if (currentItem === fileLength) {
      onSubmitClick(newList);
    }
  };

  const onSubmitClick = async (data_id, amount) => {
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
      amount: textPayment,
      status: 1,
    });
    await axios
      .post("https://reelsmaker.in/apis/client/clientAddProj.php", data)
      .then(function (response) {
        console.log("response :: " + JSON.stringify(response));

        setShowLoader(false);
        if (response.data.status === true) {
          navigate(-1);

          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        setShowLoader(false);
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
    <>
      <Wrapper className="whiteBg">
        <div
          class="container account_form"
          data-aos="fade-up"
          data-aos-delay="0"
        >
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
              <div class="login_submit">
                <button
                  class="btn btn-md btn-black-default-hover mb-4"
                  style={{ padding: "10px 50px", margin: "30px 0 0 0" }}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    togglePayment();
                    // createZipArchive(e);
                  }}
                >
                  Upload
                </button>
              </div>

              {/* <GooglePayButton
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
              /> */}
            </div>
          </form>
        </div>
      </Wrapper>
      {showPayment ? (
        <div className="popup">
          <div className="popup-content">
            <h2>Enter Card Details</h2>
            {/* <form onSubmit={handleSubmit} style={{ paddingTop: 25 }}>
              <div className="card-input">
                <label htmlFor="card-number">Card number</label>
                <CardNumberElement id="card-number" />
              </div>
              <div className="row-input">
                <div className="expiration-input">
                  <label htmlFor="card-expiry">Expiration date</label>
                  <CardExpiryElement id="card-expiry" />
                </div>
                <div className="cvv-input">
                  <label htmlFor="card-cvc">CVV</label>
                  <CardCvcElement id="card-cvc" />
                </div>
              </div>
              <button className="pay-button" type="submit">
                Pay
              </button>
            </form> */}
            <form className="payment-form" onSubmit={handleSubmit}>
              <div className="card-element-container">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        fontFamily: "Arial, sans-serif",
                      },
                    },
                    hidePostalCode: true,
                  }}
                />
              </div>
              <button className="pay-button" type="submit">
                Pay
              </button>
            </form>
          </div>
        </div>
      ) : null}
      {showLoader ? (
        <div className="popup">
          <div className="popup-loader">
            <div className="loader" />
          </div>
        </div>
      ) : null}
    </>
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
