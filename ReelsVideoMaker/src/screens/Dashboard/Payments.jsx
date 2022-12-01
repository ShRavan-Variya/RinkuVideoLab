import React from "react";
// Sections
import TopNavUpload from "../../components/Nav/TopNavUpload";
import Payment from "../../components/Sections/Payments";
import Footer from "../../components/Sections/Footer"

const Payments = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <TopNavUpload onPosition={1}/>
      <Payment />
      <Footer isHome={false}/>
    </div>
  );
}

export default Payments;

