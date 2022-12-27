import React from "react";
import styled from "styled-components";

export default function PrivacyPolicy() {
  return (
    <Wrapper className="whiteBg">
      <div className="container fullyCenterCard">
        <div>
          <p><strong><span style={{ fontSize: '26px' }}>Privacy Policy</span></strong></p>
          <br />
          <p><span style={{ fontSize: '16px' }}>At Reels Maker, we are committed to protecting the privacy of our users. This privacy policy (the "Policy") explains how we collect, use, and share information about you when you use our mobile website and any related services.</span></p>
          <br />
          <p><span style={{ fontSize: '16px' }}>By using our Services, you agree to the collection, use, and sharing of your information as described in this Policy. If you do not agree with our policies and practices, do not use our services.</span></p>
          <br />
          <p><span>We may change our policies and practices from time to time, and we encourage you to review this Policy periodically. If we make any material changes, we will notify you by posting the changes on this page or through the services.</span></p>
          <br />
          <br />


          <p><strong><span style={{ fontSize: '18px' }}>Information We Collect</span></strong></p><br />
          <p><span style={{ fontSize: '16px' }}>We collect information about you in the following ways:</span></p><br />
          <ul style={{listStyleType: 'unset', marginLeft: '40px'}}>
            <li><p>Information you provide to us: We collect information that you provide to us directly, such as when you create an account, update your profile, or post content to the Services. This information may include your name, email address, phone number, and any other personal or demographic information you choose to provide.</p></li><br />
            <li><p>Information we collect automatically: When you use the Services, we may collect certain information automatically, including your IP address, device information, and usage information. This information may be collected through the use of cookies, web beacons, and other tracking technologies.</p></li><br />
            <li><p>Information from third parties: We may receive information about you from third parties, such as social media platforms or other third-party services that you have linked to your account.</p></li><br />
          </ul>
          <br/>
          
          <p><strong><span style={{ fontSize: '18px' }}>Use of Information</span></strong></p><br />
          <p><span style={{ fontSize: '16px' }}>We use the information we collect for the following purposes:</span></p><br />
          <ul style={{listStyleType: 'unset', marginLeft: '40px'}}>
            <li><p>To provide and improve the Services: We use the information we collect to provide and improve the services, including by personalizing your experience and presenting content and features that are relevant to you.</p></li><br />
            <li><p>To communicate with you: We may use the information we collect to communicate with you, such as to send you updates, notifications, and other messages related to the services.</p></li><br />
            <li><p>For research and development: We may use the information we collect for research and development purposes, including to understand how users interact with the services and to develop new features and functionality.</p></li><br />
          </ul>
          <br/>
          
          <p><strong><span style={{ fontSize: '18px' }}>Sharing of Information</span></strong></p><br/>
          <p><span style={{ fontSize: '16px' }}>We may share the information we collect in the following ways:</span></p><br />
          <ul style={{listStyleType: 'unset', marginLeft: '40px'}}>
            <li><p>With third-party service providers: We may share your information with third-party service providers who perform functions on our behalf, such as hosting, analytics, and marketing.</p></li><br/>
            <li><p>With third parties for legal reasons: We may disclose your information to third parties if we believe in good faith that such disclosure is necessary to</p></li><br/>
            <ol style={{listStyleType: 'revert', marginLeft: '40px'}}>
              <li><p>comply with applicable laws or regulations,</p></li><br />
              <li><p>protect our rights or property, or</p></li><br />
              <li><p>protect the rights or safety of our users or the public.</p></li><br />
            </ol>
            <li><p>With third parties as part of a business transaction: We may share your information with third parties in connection with a business transaction, such as a merger, acquisition, or sale of all or a portion of our assets.</p></li><br />
            <li><p>With your consent: We may share your information with third parties when you have given us your consent to do so.</p></li><br/>
          </ul>
          <br/>

          <p><strong><span style={{ fontSize: '18px' }}>Data Retention and Security</span></strong></p><br/>
          <p><span style={{ fontSize: '16px' }}>We take reasonable steps to protect the information we collect from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or method of electronic storage is completely secure, and we cannot guarantee the absolute security of your information.</span></p><br />
          <p><span style={{ fontSize: '16px' }}>We retain your personal information for as long as is necessary for the purposes for which it was collected or as required by applicable laws.</span></p>
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