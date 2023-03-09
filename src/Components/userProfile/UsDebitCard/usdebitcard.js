import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import "./usdebitcard.css";

const usDebitCardTabs = [
  {
    id: uuidv4(),
    nameOfTab: "Select Debit Crad",
  },
  { id: uuidv4(), nameOfTab: "View Transactions" },
];

const UsDebitCard = () => {
  const [tabActivated, setTabActivated] = useState(usDebitCardTabs[0].id);
  return (
    <div>
      <h5>US Debit Card</h5>
      <ul className="tabs-cont">
        {usDebitCardTabs.map((eachTab) => {
          const activatedTabBoolean = tabActivated === eachTab.id;
          const activatedTabCss = activatedTabBoolean ? "tab-activated" : "";
          return (
            <li key={eachTab.id} className="tab-item">
              <button
                onClick={() => setTabActivated(eachTab.id)}
                className={`${activatedTabCss} tab-item-button`}
              >
                {eachTab.nameOfTab}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsDebitCard;
