import { useState } from "react";
import ViewTransactions from "./viewTransactions";
import "./usdebitcard.scss"

export const usDebitCardTabs = [
  {
    id: 1,
    nameOfTab: "Select Debit Card",
  },
  { id: 2, nameOfTab: "View Transactions" },
];

const UsDebitCard = () => {
  const [tabActivated, setTabActivated] = useState(usDebitCardTabs[0].nameOfTab);

  const renderDebitcardDetails = () => {
    switch (tabActivated){
      case "Select Debit Card" :
        return "Debit Card"
      case "View Transactions" :
        return <ViewTransactions/>
      default : 
        return null

    }
  }
  return (
    <div>
  <h5 className="debit-card-main-heading" data-testid="debit-card-title">US Debit Card</h5>
  <ul className="tabs-cont" data-testid="debit-card-tabs">
    {usDebitCardTabs.map((eachTab) => {
      const activatedTabBoolean = tabActivated === eachTab.nameOfTab;
      const activatedTabCss = activatedTabBoolean ? "tab-activated" : "";
      return (
        <li key={eachTab.id} className="tab-item">
          <button
            onClick={() => setTabActivated(eachTab.nameOfTab)}
            className={`${activatedTabCss} tab-item-button`}
            data-testid={`tab-item-${eachTab.nameOfTab}`}
          >
            {eachTab.nameOfTab}
          </button>
        </li>
      );
    })}
  </ul>
  <hr className="h-rule-tabs"/>
  {renderDebitcardDetails()}
</div>

  );
};

export default UsDebitCard;
