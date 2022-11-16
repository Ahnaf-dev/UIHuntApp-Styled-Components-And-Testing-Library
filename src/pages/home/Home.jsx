import React from "react";
import styled from "styled-components";
import { Center, Container, Button } from "../../utilities/utilityComponents";
import news from "../../assets/images/news.png";
import Header from "../../components/Header/Header";
import PageTemplate from "./sections/pageTemplate/PageTemplate";
const Title = styled.h1`
  font-size: "40px";
`;
const Home = () => {
  return (
    <>
      <Header />
      <PageTemplate />
    </>
  );
};

export default Home;
