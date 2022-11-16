import React from "react";
import styled from "styled-components";
import { Container } from "../../utilities/utilityComponents";
import styledConfig from "../../setup/styles.config";
import links from "../../setup/links";

const StyledHeader = styled.header`
  padding: 30px 0px;
  & a {
    color: black;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const StyledContainer = styled(Container)`
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const HeadingLink = styled.a.attrs((props) => ({
  href: "#",
}))`
  font-size: 40px;
`;

const HeadingSpan = styled.span`
  color: ${styledConfig.theme.colors.main.color};
`;

const StyledUL = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const generateLinks = () => {
  const html = links.map((link) => {
    return (
      <li key={link}>
        <HeadingLink>{link}</HeadingLink>
      </li>
    );
  });

  return html;
};

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <HeadingLink>
          UI<HeadingSpan>Hunt</HeadingSpan>
        </HeadingLink>
        <nav>
          <StyledUL>{generateLinks()}</StyledUL>
        </nav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
