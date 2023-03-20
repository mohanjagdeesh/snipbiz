import { useState } from "react";
import "./usdebitcard.scss"

export const usDebitCardTabs = [
  {
    id: 1,
    nameOfTab: "Select Debit Crad",
  },
  { id: 2, nameOfTab: "View Transactions" },
];

const UsDebitCard = () => {
  const [tabActivated, setTabActivated] = useState(usDebitCardTabs[0].id);
  return (
    <div>
  <h5 data-testid="debit-card-title">US Debit Card</h5>
  <ul className="tabs-cont" data-testid="debit-card-tabs">
    {usDebitCardTabs.map((eachTab) => {
      const activatedTabBoolean = tabActivated === eachTab.id;
      const activatedTabCss = activatedTabBoolean ? "tab-activated" : "";
      return (
        <li key={eachTab.id} className="tab-item">
          <button
            onClick={() => setTabActivated(eachTab.id)}
            className={`${activatedTabCss} tab-item-button`}
            data-testid={`tab-item-${eachTab.id}`}
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
