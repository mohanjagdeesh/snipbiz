import { Fragment, useState } from "react";
import SavedCards from "../savedCards/Savedcards.jsx";
import UserProfileTabs from "../UserProfileTabs/userProfileTabs.jsx";
import UsDebitCard from "../UsDebitCard/usdebitcard";
import Orders from "../orders/Order";
import "./Dashboard.css";
import Messages from "../MessageCenter/messageCenter"
import Cancellation from "../CancellationRefund/cancellationRefund"
import MyCoupons from "../../myCoupons/MyCoupons";
import UserProfileDashboard from "../../UserProfileDashboard/UserProfileDashboard";

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


    switch (`${dashboardName}`) {
      case "Dashboard":
        return <UserProfileDashboard/>;

      case "Orders":
        return <Orders />;

      case "Cancellation/Refund":
        return <Cancellation/>;

      case "User Profile":
        return <UserProfileTabs />;

      case "Shipping Address":
        return "shipping address";

      case "Help Desk":
        return "helpdesk";

      case "Message Center":
        return <Messages/>;

      case "My Saved Cards":
        return <SavedCards />;

      case "US Debit Card":
        return <UsDebitCard />;

      case "My Coupons":
        return <MyCoupons/>;

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
            onClick={() => setActiveButton(eachOne.id) }
            className={`list-button ${activeId ? "active-button" : ""}`}
            data-testid={`list-button-${eachOne.id}`}
          >
            {eachOne.listName}
          </button>
        </li>
      );
    })}
  </ul>
  {renderingRightSections()}
</div>

    </Fragment>
  );
};

export default Dashboard;
