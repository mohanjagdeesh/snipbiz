import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import TabItem from "../tabItem/TabItem"
import "./Tabs.css";
import {useMediaQuery} from "react-responsive"

const tabsList = [
  { id: uuidv4(), tabName: "Personal Information" },
  { id: uuidv4(), tabName: "Address" },
  { id: uuidv4(), tabName: "Company Information" },
  { id: uuidv4(), tabName: "ChangePassword" },
];

const Tabs = () => {
  const isTabletOrMobile=useMediaQuery({query:"(max-width:1124px)"});
  const [activeTabId, setTabSelection] = useState(tabsList[1].id);
  const onClickOn = (id) => {
    setTabSelection(id);
  };

  const renderTabItems = () => {
    return (
      <ul className={isTabletOrMobile ? "tabs-mobile-container":"tabs-cont"}>
        {tabsList.map((tab) => (
          <TabItem
            tabDetails={tab}
            onClickOn={onClickOn}
            active={tab.id === activeTabId}
            key={tab.id}
          />
        ))}
      </ul>
    );
  };

  return <div>{renderTabItems()}</div>;
};

export default Tabs;