import "./UserProfileDashboard.css";

import { BsCaretDown } from "react-icons/bs";

const userDashboard = [
  "Dashboard",
  "Orders",
  "Cancellation/Refund",
  "User Profile",
  "Shipping Address",
  "Help Desk",
  "Message Center",
  "My Saved Cards",
  "Us Debit Card",
  "My Coupons",
  "Forward Shipping",
];


const UserProfileDashboard = () => {
  return(
    <div className="main-user-profile" data-testid="main-user-profile">
    <div className="user-profile-heading" data-testid="user-profile-heading">
      <h1>User Profile</h1>
    </div>
    <div className="user-dashboard-container" data-testid="user-dashboard-container">
      <div className="user-dashboard" data-testid="user-dashboard">
        <ul className="user-dashboard-list" data-testid="user-dashboard-list">
          {userDashboard.map((each) => (
            <li key={each} className="user-list" data-testid="user-list">{each}</li>
          ))}
        </ul>
      </div>
      <div className="order-details-container" data-testid="order-details-container">
        <h2 className="order-details-main-heading" data-testid="order-details-main-heading">Order Detail</h2>
        <table cellPadding="3" data-testid="order-details-table">
          <thead>
            <tr >
            <th>Date <BsCaretDown data-testid="date-caret"/></th>
            <th>Order ID <BsCaretDown data-testid="order-id-caret"/></th>
            <th>From <BsCaretDown data-testid="from-caret"/></th>
            <th>Destination <BsCaretDown data-testid="destination-caret"/></th>
            <th>Recipient <BsCaretDown data-testid="recipient-caret"/></th>
            <th>Carrier Log <BsCaretDown data-testid="carrier-log-caret"/></th>
            <th>Item <BsCaretDown data-testid="item-caret"/></th>
            <th>Amount <BsCaretDown data-testid="amount-caret"/></th>
            <th>Status <BsCaretDown data-testid="status-caret"/></th>
            </tr>
          </thead>
          <tbody data-testid="order-details-table-body">
            <tr>
              <td>02/14/2023</td>
              <td>XB1234VIOUSAIN</td>
              <td>Edison, NJ US</td>
              <td>Mumbai</td>
              <td>Victor</td>
              <td>DHL</td>
              <td>Cloths</td>
              <td>$52.68</td>
              <td>Recieve</td>
            </tr>
            <tr>
              <td>02/14/2023</td>
              <td>XB1234VIOUSAIN</td>
              <td>Edison, NJ US</td>
              <td>Mumbai</td>
              <td>Victor</td>
              <td>DHL</td>
              <td>Cloths</td>
              <td>$52.68</td>
              <td>Recieve</td>
            </tr>
            <tr>
              <td>02/14/2023</td>
              <td>XB1234VIOUSAIN</td>
              <td>Edison, NJ US</td>
              <td>Mumbai</td>
              <td>Victor</td>
              <td>DHL</td>
              <td>Cloths</td>
              <td>$52.68</td>
              <td>Recieve</td>
            </tr>
            <tr>
              <td>02/14/2023</td>
              <td>XB1234VIOUSAIN</td>
              <td>Edison, NJ US</td>
              <td>Mumbai</td>
              <td>Victor</td>
              <td>DHL</td>
              <td>Cloths</td>
              <td>$52.68</td>
              <td>Recieve</td>
            </tr>
          </tbody>
        </table>
        <h2 className="order-details-main-heading" data-testid="help-desk-heading">Help Desk Items</h2>
        <table cellPadding="3" data-testid="help-desk-table">
          <thead>
            <tr data-testid="help-desk-table-header">
            <th data-testid="date-header">Date <BsCaretDown/></th>
            <th data-testid="ticket-id-header">Ticket ID <BsCaretDown/></th>
            <th data-testid="ticket-type-header">Ticket Type <BsCaretDown/></th>
            <th data-testid="short-description-header">Short Description <BsCaretDown/></th>
            <th data-testid="status-header">Status <BsCaretDown/></th>
            </tr>
          </thead>
          <tbody>
            <tr data-testid="help-desk-table-row">
              <td data-testid="date-cell">02/14/2023</td>
              <td data-testid="ticket-id-cell">TKT1234NJ</td>
              <td data-testid="ticket-type-cell">Shipment</td>
              <td data-testid="short-description-cell">Goods held at customs</td>
              <td data-testid="status-cell">Work in progress</td>
            </tr>
            <tr data-testid="help-desk-table-row">
              <td data-testid="date-cell">02/14/2023</td>
              <td data-testid="ticket-id-cell">TKT1234NJ</td>
              <td data-testid="ticket-type-cell">Shipment</td>
              <td data-testid="short-description-cell">Goods held at customs</td>
              <td data-testid="status-cell">Work in progress</td>
            </tr>
          </tbody>
        </table>
        <h2 className="order-details-main-heading" data-testid="forward-shipping-heading">Forward Shipping</h2>
        <table cellPadding="3" data-testid="forward-shipping-table">
          <thead>
            <tr data-testid="forward-shipping-table-header">
            <th data-testid="package-header">Package <BsCaretDown/></th>
            <th data-testid="sent-package-header">Sent Package <BsCaretDown/></th>
            <th data-testid="expected-package-header">Expected Package <BsCaretDown/></th>
            <th data-testid="assisted-package-header">Assisted Package <BsCaretDown/></th>
            <th data-testid="action-required-header">Action Require <BsCaretDown/></th>
            <th data-testid="in-progress-header">In Progress <BsCaretDown/></th>
            <th data-testid="ready-to-ship-header">Ready to Ship <BsCaretDown/></th>
            <th data-testid="balance-a-header">Balance A <BsCaretDown/></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>1</td>
              <td>6</td>
              <td>Held in customs</td>
              <td>5</td>
              <td>8</td>
              <td>$500</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4</td>
              <td>1</td>
              <td>6</td>
              <td>Held in customs</td>
              <td>5</td>
              <td>8</td>
              <td>$500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
export default UserProfileDashboard;
