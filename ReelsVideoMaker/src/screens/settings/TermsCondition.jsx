import React from "react";
// Sections
import TopNavCommon from "../../components/Nav/TopNavCommon";
import Terms from "../../components/Sections/settings/TermsCondition";
import Footer from "../../components/Sections/Footer"

const TermsCondition = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <TopNavCommon/>
      <Terms />
      <Footer isHome={true}/>
    </div>
  );
}

export default TermsCondition;

