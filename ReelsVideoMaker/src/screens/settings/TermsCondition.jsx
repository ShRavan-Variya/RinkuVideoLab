import React from "react";
// Sections
import TopNavCommon from "../../components/Nav/TopNavCommon";
import UserDisplay from "../../components/Sections/settings/UserDisplay";
import Footer from "../../components/Sections/Footer"

const TermsCondition = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <TopNavCommon/>
      <UserDisplay />
      <Footer />
    </div>
  );
}

export default TermsCondition;

