import React from "react";
// Sections
import TopNavCommon from "../../components/Nav/TopNavCommon";
import Policy from "../../components/Sections/settings/PrivacyPolicy";
import Footer from "../../components/Sections/Footer"

const PrivacyPolicy = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <TopNavCommon/>
      <Policy />
      <Footer isHome={true}/>
    </div>
  );
}

export default PrivacyPolicy;

