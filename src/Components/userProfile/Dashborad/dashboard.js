import { Fragment, useState } from "react";
import SavedCards from "../SavedCards/savedcards";
import UserProfileTabs from "../UserProfileTabs/userProfileTabs";
import UsDebitCard from "../UsDebitCard/UsDebitCard";
import Orders from "../orders/Order";
<<<<<<< HEAD:src/Components/userProfile/Dashborad/dashboard.js

import "./dashboard.css";
=======
import "./dashboard.scss";
import UsDebitCard from "../UsDebitCard/USDebit";
import UserProfile from "../cancellation/UserProfile";
import Messages from "../../UserMessages/Messages";
>>>>>>> c096f31 (complete routes):src/Components/UserProfile/Dashborad/Dashboard.jsx

const dashboardList = [
  { id: 1, listName: "Dashboard" },
  { id: 2, listName: "Orders" },
  { id: 3, listName: "Cancellation/Refund" },
  { id: 4, listName: "User Profile" },
  { id: 5, listName: "Shipping Address" },
  { id: 6, listName: "Help Desk" },
  { id: 7, listName: "Message Center" },
  { id: 8, listName: "My Saved Cards" },
  { id: 9, listName: "US Debit Card" },
  { id: 10, listName: "My Coupons" },
  { id: 11, listName: "Forward Shipping" },
];


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
        return <UserProfile/>;

      case "User Profile":
        return renderUserProfileDetails();

      case "Shipping Address":
        return "shippingaddress";

      case "Help Desk":
        return "helpdesk";

      case "Message Center":
        return <Messages/>;

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
     
     <div className="dashboard-main-container" data-testid="dashboard-main-container">
  <ul className="dashboard-list-container" data-testid="dashboard-list-container">
    {dashboardList.map((eachOne) => {
      const activeId = eachOne.id === activeButtonId;
      return (
        <li key={eachOne.id} className="dashboard-list-item" data-testid={`dashboard-list-item-${eachOne.id}`}>
          <button
            onClick={() => setActiveButton(eachOne.id)}
            className={`list-button ${activeId ? "active-button" : ""}`}
            data-testid={`list-button-${eachOne.id}`}
          >
            {eachOne.listName}
          </button>
        </li>
      );
    })}
  </ul>
  <div data-testid="orders-content" ><p>dashboard</p> </div>
  {renderingRightSections()}
</div>

    </Fragment>
  );
};

export default Dashboard;
