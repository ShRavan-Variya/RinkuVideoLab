import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import Instagram from "../../assets/svg/Instagram";
import Location from "../../assets/svg/Location";
import Whatsapp from "../../assets/svg/Whatsapp";

export default function Contact({ image1, image2, image3 }) {
  return (
    <Wrapper id="contact">
      <div className="lightBg" style={{ paddingBottom: 50 }}>
        <AddMain className="container">
          <AddLeft>
            <HeaderInfo>
              <h1 className="font40 extraBold">Let's get in touch</h1>
              <p className="font13">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                <br />
                labore et dolore magna aliquyam erat, sed diam voluptua.
              </p>
            </HeaderInfo>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 marginV15">
              <div style={{ width: '100%' }}>
                <ContactCard className='col-xs-6 col-sm-12 col-md-12 col-lg-12 marginV15'>
                  <IconStyle className="darkColor">
                    <Location
                      height={30}
                      width={30}
                      fill={'#35426D'}
                    />
                  </IconStyle>
                  <p className="font15">
                    <a href="https://goo.gl/maps/fwYUyNdLkHUqfxmy9">323, Avalon Business Hub, Katargam Rd, Aamba Talavadi, Katargam, Surat, Gujarat 395004</a>
                  </p>
                </ContactCard>
                <ContactCard className='col-xs-12 col-sm-12 col-md-12 col-lg-12 marginT15'>
                  <IconStyle>
                    <Whatsapp
                      height={30}
                      width={30}
                      fill={'#35426D'}
                    />
                  </IconStyle>
                  <p className="font15">
                    <a href="https://wa.me/+919377603050">+91 93 77 603050</a>
                  </p>
                </ContactCard>
                <ContactCard className='col-xs-12 col-sm-12 col-md-12 col-lg-12 marginV15'>
                  <IconStyle className="darkColor">
                    <Instagram
                      height={30}
                      width={30}
                      fill={'#35426D'}
                    />
                  </IconStyle>
                  <p className="font15">
                    <a href="https://www.instagram.com/rinkuvideolab/">https://www.instagram.com/rinkuvideolab/</a>
                  </p>
                </ContactCard>
              </div>
            </div>
          </AddLeft>
          <AddRight className="flexNullCenter">
              <AddImgWrapp1 className="flexCenter">
                <img src={image1 ? 'https://reelsmaker.in/api/Reels/DashData/' + image1 : ContactImg1} alt="office" />
              </AddImgWrapp1>
              <div style={{flex: 1}}>
                <AddImgWrapp2>
                  <img src={image2 ? 'https://reelsmaker.in/api/Reels/DashData/' + image2 : ContactImg2} alt="office" />
                </AddImgWrapp2>
                <AddImgWrapp3>
                  <img src={image3 ? 'https://reelsmaker.in/api/Reels/DashData/' + image3 : ContactImg3} alt="office" />
                </AddImgWrapp3>
              </div>
          </AddRight>
        </AddMain>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
// const Form = styled.form`
//   padding: 70px 0 30px 0;
//   input,
//   textarea {
//     width: 100%;
//     background-color: transparent;
//     border: 0px;
//     outline: none;
//     box-shadow: none;
//     border-bottom: 1px solid #707070;
//     height: 30px;
//     margin-bottom: 30px;
//   }
//   textarea {
//     min-height: 100px;
//   }
//   @media (max-width: 860px) {
//     padding: 30px 0;
//   }
// `;
// const ButtonInput = styled.input`
//   border: 1px solid #7620ff;
//   background-color: #7620ff;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #7620ff;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;
// const SumbitWrapper = styled.div`
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 50px;
//   }
// `;
const AddMain = styled.div`
  display: flex;
  @media (max-width: 860px) {
    display: block;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  z-index: 9;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRight = styled.div`
  width: 40%;
  margin: 10% 0;
  // margin: 25% 0;
  z-index: 9;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddImgWrapp1 = styled.div`
flex: 1;
width: 100%;
img {
  width: 80%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;
const AddImgWrapp2 = styled.div`
width: 100%;
margin: 0 0 0 15%;
img {
  width: 90%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;
const AddImgWrapp3 = styled.div`
width: 100%;
margin: 10% 0 0 15%;
img {
  width: 90%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
}
`;

const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;

const ContactCard = styled.div`
  width: 100%;
`;