import React from "react";
// Sections
import TopNavUpload from "../../components/Nav/TopNavUpload";
import Download from "../../components/Sections/Download";
import Footer from "../../components/Sections/Footer"

const Downloads = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <TopNavUpload onPosition={2}/>
      <Download />
      <Footer isHome={false}/>
    </div>
  );
}

export default Downloads;

