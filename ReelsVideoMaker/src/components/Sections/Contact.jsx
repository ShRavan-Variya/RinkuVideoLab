import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import Instagram from "../../assets/svg/Instagram";
import Location from "../../assets/svg/Location";
import Whatsapp from "../../assets/svg/Whatsapp";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg" style={{paddingBottom: 50}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "5%", paddingTop: "5%" }}>
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
              {/* <Form>
                <label className="font13">First name:</label>
                <input type="text" id="fname" name="fname" className="font20 extraBold" />
                <label className="font13">Email:</label>
                <input type="text" id="email" name="email" className="font20 extraBold" />
                <label className="font13">Subject:</label>
                <input type="text" id="subject" name="subject" className="font20 extraBold" />
                <label className="font13">Comment:</label>
                <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper> */}
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 flex flexCenter">
              <ContactImageWidth1 />
              <ContactImageWidth2>
                <div style={{ margin: 10 }}>
                  <img src={ContactImg1} alt="office" style={{ width: '100%' }} className="radius6" />
                </div>
                <div style={{ margin: 10 }}>
                  <img src={ContactImg2} alt="office" style={{ width: '100%' }} className="radius6" />
                </div>
              </ContactImageWidth2>
              <ContactImageWidth3>
                <div style={{ margin: 10, marginTop: 60 }}>
                  <img src={ContactImg3} alt="office" style={{ width: '100%' }} className="radius6" />
                </div>
              </ContactImageWidth3>
              <ContactImageWidth1 />
            </div>
          </div>
        </div>
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
const ContactImageWidth1 = styled.div`
  width: 10%,
`;
const ContactImageWidth2 = styled.div`
  width: 35%,
`;
const ContactImageWidth3 = styled.div`
  width: 45%,
`;

const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;

const ContactCard = styled.div`
  width: 100%;
`;