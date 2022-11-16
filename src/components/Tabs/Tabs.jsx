import React, { useState } from "react";
import styled from "styled-components";
import styledConfig from "../../setup/styles.config";
import "./tabs.scss";
const TabHeader = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Tab = styled.p`
  cursor: pointer;
  font-weight: 700;
  font-size: 25px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${styledConfig.theme.colors.main.color};
  }
`;

const TabBody = styled.div``;
const TabContent = styled.div``;
const TabContentText = styled.p`
  opacity: 0.7;
`;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("details");
  return (
    <>
      <TabHeader className="mb-3">
        <TabsContainer>
          <Tab
            className={`${activeTab === "details" ? "tabs--active" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Details
          </Tab>
          <Tab
            className={`${activeTab === "update" ? "tabs--active" : ""}`}
            onClick={() => setActiveTab("update")}
          >
            Update Logs
          </Tab>
        </TabsContainer>
      </TabHeader>
      <TabBody>
        <TabContent
          style={{ display: `${activeTab === "details" ? "block" : "none"}` }}
        >
          <TabContentText className="mb-1">
            UIHunt is free one-page Bootstrap 5 template designed for Startup
            websites. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Totam, libero.
          </TabContentText>
          <TabContentText className="mb-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            doloremque rerum eius delectus quasi! Hic doloremque in mollitia rem
            earum quia! Tenetur dicta deleniti voluptate aliquam odit assumenda
            minima fuga natus facilis, corporis, saepe, enim officiis quae
            ducimus a perferendis consequuntur? Eveniet harum consectetur
            aliquam adipisci quis dolorem, atque aut.
          </TabContentText>
        </TabContent>

        <TabContent
          style={{ display: `${activeTab === "update" ? "block" : "none"}` }}
        >
          <TabContentText className="mb-1">
            Update Logs: New Content
          </TabContentText>
        </TabContent>
      </TabBody>
    </>
  );
};

export default Tabs;
