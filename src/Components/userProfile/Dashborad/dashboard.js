import { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SavedCards from "../SavedCards/savedcards";
import UserProfileTabs from "../UserProfileTabs/userProfileTabs";
import UsDebitCard from "../UsDebitCard/usdebitcard";
import Orders from "../orders/Order";

import "./dashboard.css";

const dashboardList = [
  { id: uuidv4(), listName: "Dashboard" },
  { id: uuidv4(), listName: "Orders" },
  { id: uuidv4(), listName: "Cancellation/Refund" },
  { id: uuidv4(), listName: "User Profile" },
  { id: uuidv4(), listName: "Shipping Address" },
  { id: uuidv4(), listName: "Help Desk" },
  { id: uuidv4(), listName: "Message Center" },
  { id: uuidv4(), listName: "My Saved Cards" },
  { id: uuidv4(), listName: "US Debit Card" },
  { id: uuidv4(), listName: "My Coupons" },
  { id: uuidv4(), listName: "Forward Shipping" },
];

const isMobile = true;

const Dashboard = () => {
  const [activeButtonId, setActiveButton] = useState(dashboardList[0].id);

  const renderingRightSections = () => {
    const filteredListName = dashboardList.filter(
      (eachListName) => activeButtonId === eachListName.id
    );
    const dashboardName = filteredListName[0].listName;

    const renderMysavedCards = () => {
      return <SavedCards />;
    };

    const renderUserProfileDetails = () => {
      return <UserProfileTabs />;
    };

    const renderUsDebitCards = () => {
      return <UsDebitCard />;
    };

    switch (`${dashboardName}`) {
      case "Dashboard":
        return "dashboard";

      case "Orders":
        return <Orders />;

      case "Cancellation/Refund":
        return "cancel";

      case "User Profile":
        return renderUserProfileDetails();

      case "Shipping Address":
        return "shippingaddress";

      case "Help Desk":
        return "helpdesk";

      case "Message Center":
        return "messagecenter";

      case "My Saved Cards":
        return renderMysavedCards();

      case "US Debit Card":
        return renderUsDebitCards();

      case "My Coupons":
        return "mycoupons";

      case "Forward Shipping":
        return "forwardshipping";

      default:
        return null;
    }
  };
  return (
    <Fragment>
      {isMobile ? (
        <div className="dashboard-main-container">
          <ul className="dashboard-list-container">
            {dashboardList.map((eachOne) => {
              const activeId = eachOne.id === activeButtonId;
              return (
                <li key={eachOne.id} className="dashboard-list-item">
                  <button
                    onClick={() => setActiveButton(eachOne.id)}
                    className={`list-button ${activeId ? "active-button" : ""}`}
                  >
                    {eachOne.listName}
                  </button>
                </li>
              );
            })}
          </ul>
          {renderingRightSections()}
        </div>
      ) : null}
    </Fragment>
  );
};

export default Dashboard;
