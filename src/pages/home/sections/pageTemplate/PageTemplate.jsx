import React from "react";
import styled from "styled-components";
import { Container } from "../../../../utilities/utilityComponents";
import UIbg from "../../../../assets/images/ui-bg.jpg";
import Tabs from "../../../../components/Tabs/Tabs";
const Section = styled.section`
  background-color: #f8f9fa;
  padding: 50px 0;
`;

const Grid = styled.div`
  display: grid;
  gap: 50px;
`;

const TemplateContent = styled.div``;
const TemplateContentHeading = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const TabContainer = styled.div`
  background-color: white;
  padding: 50px 20px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.35);
`;

const PageTemplate = () => {
  return (
    <Section>
      <Container>
        <Grid>
          <TemplateContent>
            <TemplateContentHeading className="mb-5">
              UIHunt V4 - One Page Template
            </TemplateContentHeading>
            <img src={UIbg} alt="UI Background Image" />
            <TabContainer>
              <Tabs />
            </TabContainer>
          </TemplateContent>
        </Grid>
      </Container>
    </Section>
  );
};

export default PageTemplate;
