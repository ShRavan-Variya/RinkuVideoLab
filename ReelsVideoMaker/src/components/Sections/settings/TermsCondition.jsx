import React from "react";
import styled from "styled-components";

export default function TermsCondition() {
  return (
    <Wrapper className="whiteBg">
      <div className="container fullyCenterCard">
        <div>
          <p><strong><span style={{ fontSize: '26px' }}>Terms & Conditions</span></strong></p>
          <br />
          <br />
          <p><span style={{ fontSize: '16px' }}>Welcome to Reels Maker. By using the Website, you agree to be bound by these terms and conditions and our privacy policy.</span></p>
          <br />

          <p><strong><span style={{ fontSize: '18px' }}>1. Use of the Website</span></strong></p>
          <div style={{ marginLeft: '20px' }}>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>1.1 </strong>The Website is a platform that allows users to create and purchase custom reels using multimedia content, including images and videos.</span></p>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>1.2 </strong>You may use the Website only in accordance with these Terms and all applicable laws and regulations.</span></p>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>1.3 </strong>You may not use the Website:</span></p>
            <ul style={{ listStyleType: 'unset', marginLeft: '40px' }}>
              <li style={{marginTop: '10px'}}><p>In any way that violates any applicable local, state, national, or international law or regulation.</p></li>
              <li style={{marginTop: '10px'}}><p>To transmit, or procure the sending of, any unsolicited or unauthorized advertising or promotional material or any other form of similar solicitation (spam).</p></li>
              <li style={{marginTop: '10px'}}><p>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by us, may harm Reels Maker or users of the Website or expose them to liability.</p></li>
            </ul>
          </div>
          <br /><br />

          <p><strong><span style={{ fontSize: '18px' }}>2. Registration and Account Security</span></strong></p>
          <div style={{ marginLeft: '20px' }}>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>2.1 </strong>To use certain features of the Website, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account.</span></p>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>2.2 </strong>You agree to immediately notify us of any unauthorized use of your account or password, or any other breach of security.</span></p>
          </div>
          <br /><br />

          <p><strong><span style={{ fontSize: '18px' }}>3. Intellectual Property</span></strong></p>
          <p><strong><span style={{ fontSize: '18px' }}>4. User Content</span></strong></p>
          <p><strong><span style={{ fontSize: '18px' }}>5. Payments</span></strong></p>
          <p><strong><span style={{ fontSize: '18px' }}>6. Warranty Disclaimer</span></strong></p>
          <p><strong><span style={{ fontSize: '18px' }}>7. Limitation of Liability</span></strong></p>
          <p><strong><span style={{ fontSize: '18px' }}>8. Indemnification</span></strong></p>
          <p><strong><span style={{ fontSize: '18px' }}>9. Governing Law and Dispute Resolution</span></strong></p>
          <p><strong><span style={{ fontSize: '18px' }}>10. Changes to These Terms</span></strong></p>
          
          <p><strong><span style={{ fontSize: '18px' }}>11. Miscellaneous</span></strong></p>
          <div style={{ marginLeft: '20px' }}>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>11.1 </strong>These Terms constitute the entire agreement between you and Reels Maker and govern your use of the Website, superseding any prior agreements between you and Reels Maker.</span></p>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>11.2 </strong>If any part of these Terms is found to be invalid or unenforceable, that part will be enforced to the maximum extent possible, and the remaining terms will remain in full force and effect.</span></p>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>11.3 </strong>The failure of Reels Maker to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</span></p>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>11.4 </strong>You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Website or these Terms must be filed within one year after such claim or cause of action arose or be forever barred.</span></p>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>11.5 </strong>The section titles in these Terms are for convenience only and have no legal or contractual effect.</span></p>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}><strong>11.6 </strong>These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Reels Maker without restriction.</span></p>
          </div><br /><br />
          
          <p><strong><span style={{ fontSize: '18px' }}>12. Contact Us</span></strong></p>
          <div style={{ marginLeft: '20px' }}>
            <p style={{marginTop: '18px'}}><span style={{ fontSize: '16px' }}>If you have any questions about these Terms, please contact us at [insert email or contact information].</span></p>
          </div><br /><br />

        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 118px;
  padding-bottom: 150px;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;