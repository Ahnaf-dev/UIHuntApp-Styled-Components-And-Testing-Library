import React from "react";
import styled from "styled-components";
import styledConfig from "../setup/styles.config";

const StyledContainer = styled.div`
  max-width: ${styledConfig.maxBreakpoint}px;
  margin: auto;
  padding: 0 ${styledConfig.mobilePadding}px;
`;

const StyledCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const handleButtonStyle = (theme, text = false) => {
  const colors = styledConfig.theme.colors;

  switch (theme) {
    case "main":
      return colors.main.color;
    case "secondary":
      return colors.secondary.color;
    default:
      return colors.main.light.color;
  }
};

const StyledButton = styled.button`
  width: 100%;
  max-width: ${(props) =>
    props.full ? "auto" : styledConfig.buttons.maxWidth + "px"};
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  border-radius: ${styledConfig.buttons.borderRadius}px;
  background-color: ${(props) => handleButtonStyle(props.theme)};
  color: white;
`;

export const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export const Center = ({ className, children }) => {
  return <StyledCenter className={className}>{children}</StyledCenter>;
};

export const Container = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};
