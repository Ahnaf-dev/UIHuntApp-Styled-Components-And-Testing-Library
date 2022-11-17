import React from "react";
import { FaCheckCircle, FaWindowClose } from "react-icons/fa";
import styled from "styled-components";

const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
`;

const renderBenefits = (benefitsArr) => {
  return benefitsArr.map((item, i) => {
    return (
      <Benefit>
        {item.checked ? <FaCheckCircle /> : <FaWindowClose />}
        item
      </Benefit>
    );
  });
};
const Benefits = ({ benefits }) => {
  return <>{renderBenefits(benefits)}</>;
};

export default Benefits;
