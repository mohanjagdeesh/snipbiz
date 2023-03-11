import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import TabItem from "../tabItem/TabItem"
import "./Tabs.css";

const tabsList = [
  { id: uuidv4(), tabName: "Select Debit Card" },
  { id: uuidv4(), tabName: "View Transcations" },
];

const Tabs = () => {
  const [activeTabId, setTabSelection] = useState(tabsList[1].id);
  const onClickOn = (id) => {
    setTabSelection(id);
  };

  const renderTabItems = () => {
    return (
      <ul className="tabs-container">
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