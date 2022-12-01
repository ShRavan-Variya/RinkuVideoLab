import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PaymentsItem from "./PaymentsItem";

export default function Payments() {
  const [listOfPayments, setListOfPayments] = useState([]);

  useEffect(() => {
    doSetData();
  }, []);

  const doSetData = () => {
    const paymentList = [];
    for (let i = 0; i < 10; i++) {
      paymentList.push({
        projectName: "My Short Video",
        title: "Wedding",
        createdAt: '04/10/2022 12:00 PM',
        paymentId: (Math.floor(Math.random() * 3)),
        payment: (Math.floor(Math.random() * 1000))
      });
    }
    setListOfPayments(paymentList);
  };

  return (
    <Wrapper className="whiteBg">
      <div class="container">
        <UlWrapper className="card_box row">
          {listOfPayments.map((item, index) => <PaymentsItem item={item} index={index} />)}
        </UlWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 120px;
  padding-bottom: 150px;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const UlWrapper = styled.ul`
  flexDirection: 'column';
  padding-top: 25px;
  padding-bottom: 25px;
`;
