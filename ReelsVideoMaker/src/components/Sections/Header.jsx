import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobal } from "../../context/globalContext";
// Components
import FullButton from "../Buttons/FullButton";
import StepBox from "../Elements/StepBox";
// Assets
// import HeaderImage from "../../assets/img/header-img.png";
// import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Header({ image1, image2, image3, image4 }) {
  const globalContext = useGlobal();
  const isLogin = globalContext.isLogin;
  // return (
  // 	<Wrapper id='home' className='container flexSpaceCenter'>
  // 		<LeftSide className='flexCenter'>
  // 			<div>
  // 				<h1 className='extraBold font60'>Create your reels.</h1>
  // 				<HeaderP className='font13 semiBold'>
  // 					Choose your videos and our video editors will create your best
  // 					reels, Let's create your reel with reels maker and get amazing and
  // 					stunning videos.
  // 				</HeaderP>
  // 				<BtnWrapper>
  // 					<FullButton title='Create Reels' />
  // 				</BtnWrapper>
  // 			</div>
  // 		</LeftSide>
  // 		<RightSide>
  // 			<ImageWrapper>
  // 				<video
  // 					className='radius8'
  // 					width='426'
  //           height='607'
  //           controls
  //           onContextMenu={e => e.preventDefault()}
  //           controlsList="nodownload"
  // 					style={{ zIndex: 9 }}
  // 				>
  // 					<source
  // 						src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
  // 						type='video/mp4'
  // 					/>
  // 				</video>
  // 				{/* <Img
  // 					className='radius8'
  // 					src={HeaderImage}
  // 					alt='office'
  // 					style={{ zIndex: 9 }}
  // 				/> */}
  // 				<QuoteWrapper className='flexCenter darkBg radius8'>
  // 					<QuotesWrapper>
  // 						<QuotesIcon />
  // 					</QuotesWrapper>
  // 					<div>
  // 						<p className='font15 whiteColor'>
  // 							<em>
  // 								Friends, such as we desire, are dreams and fables. Friendship
  // 								demands the ability to do without it.
  // 							</em>
  // 						</p>
  // 						<p
  // 							className='font13 orangeColor textRight'
  // 							style={{ marginTop: '10px' }}
  // 						>
  // 							Ralph Waldo Emerson
  // 						</p>
  // 					</div>
  // 				</QuoteWrapper>
  // 				<DotsWrapper>
  // 					<Dots />
  // 				</DotsWrapper>
  // 			</ImageWrapper>
  // 			<GreyDiv className='lightBg'></GreyDiv>
  // 		</RightSide>
  // 	</Wrapper>
  // );

  return (
    <Wrapper id="home" className="lightBg">
      <div className="whiteBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <h4 className="font15 semiBold">Having best lab and editors</h4>
              <h2 className="font40 extraBold">Reels Maker Studio</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <Link to={isLogin ? "/Upload" : "/Login"}>
                    <FullButton
                      title="Create Reels"
                    />
                  </Link>
                </div>
                {/* <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div> */}
              </ButtonsRow>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <div className="flexNullCenter">
                  <AddImgWrapp1 className="flexCenter">
                    <img src={image1 ? image1 : AddImage1} alt="office" />
                  </AddImgWrapp1>
                  <AddImgWrapp2>
                    <img src={image2 ? image2 : AddImage2} alt="office" />
                  </AddImgWrapp2>
                </div>
                <div className="flexNullCenter">
                  <AddImgWrapp3>
                    <img src={image3 ? image3 : AddImage3} alt="office" />
                  </AddImgWrapp3>
                  <AddImgWrapp4>
                    <img src={image4 ? image4 : AddImage4} alt="office" />
                  </AddImgWrapp4>
                </div>
              </AddRightInner>
            </AddRight>
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </Advertising>
        </div>
      </div>
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Steps To Reels</h1>
          <p className="font13">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
            <br />
            labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </HeaderInfo>
        <BottomStepsMain>
          <div className="row textCenter">
            <BottomBoxWrapper>
              <StepBox item="1" title="Create Reels" />
            </BottomBoxWrapper>
            <BottomBoxWrapper>
              <StepBox item="2" title="Add Title" />
            </BottomBoxWrapper>
            <BottomBoxWrapper>
              <StepBox item="3" title="Make Payment" />
            </BottomBoxWrapper>
            <BottomBoxWrapper>
              <StepBox item="4" title="Upload Content" />
            </BottomBoxWrapper>
            <BottomBoxWrapper>
              <StepBox item="5" title="Download Reels" />
            </BottomBoxWrapper>
          </div>
        </BottomStepsMain>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  padding-bottom: 80px;
  @media (max-width: 960px) {
    padding-top: 80px;
    flex-direction: column;
    padding-bottom: 30px;
  }
`;
// const LeftSide = styled.div`
//   width: 50%;
//   height: 100%;
//   @media (max-width: 960px) {
//     width: 100%;
//     order: 2;
//     margin: 50px 0;
//     text-align: center;
//   }
//   @media (max-width: 560px) {
//     margin: 80px 0 50px 0;
//   }
// `;
// const RightSide = styled.div`
//   width: 50%;
//   height: 100%;
//   @media (max-width: 960px) {
//     width: 100%;
//     order: 1;
//     margin-top: 30px;
//   }
// `;
// const HeaderP = styled.div`
//   max-width: 470px;
//   padding: 15px 0 50px 0;
//   line-height: 1.5rem;
//   @media (max-width: 960px) {
//     padding: 15px 0 50px 0;
//     text-align: center;
//     max-width: 100%;
//   }
// `;
// const BtnWrapper = styled.div`
//   max-width: 190px;
//   @media (max-width: 960px) {
//     margin: 0 auto;
//   }
// `;
// const GreyDiv = styled.div`
//   width: 30%;
//   height: 700px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;
// const ImageWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   position: relative;
//   z-index: 9;
//   @media (max-width: 960px) {
//     width: 100%;
//     justify-content: center;
//   }
// `;
// const Img = styled.img`
//   @media (max-width: 560px) {
//     width: 80%;
//     height: auto;
//   }
// `;
// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 50px;
//   max-width: 330px;
//   padding: 30px;
//   z-index: 99;
//   @media (max-width: 960px) {
//     left: 20px;
//   }
//   @media (max-width: 560px) {
//     bottom: -50px;
//   }
// `;
// const QuotesWrapper = styled.div`
//   position: absolute;
//   left: -20px;
//   top: -10px;
// `;
const DotsWrapper = styled.div`
  position: absolute;
  right: 0px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: center;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  z-index: 9;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -50px;
  right: 0;
  z-index: 9;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 0 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 35%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

const HeaderInfo = styled.div`
  margin: 120px 0 0 0;
  @media (max-width: 860px) {
    text-align: center;
    padding: 30px 0 0 0;
    margin: 10px 0 20px 0;
  }
`;
const BottomStepsMain = styled.div`
  position: relative;
  padding: 30px 0 0 0;
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 10px 0 0 0;
  }
`;
const BottomBoxWrapper = styled.div`
  padding: 15px 0 15px 0;
  margin: 0 auto;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
