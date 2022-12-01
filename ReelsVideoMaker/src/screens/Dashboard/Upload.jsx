import React from "react";
// Sections
import TopNavUpload from "../../components/Nav/TopNavUpload";
import Upload from "../../components/Sections/Upload";
import Footer from "../../components/Sections/Footer"

const Landing = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <TopNavUpload onPosition={0}/>
      <Upload />
      <Footer isHome={false}/>
    </div>
  );
}

export default Landing;

