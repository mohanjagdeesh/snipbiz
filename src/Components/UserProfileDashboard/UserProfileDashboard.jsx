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
    <div  className="main-user-profile">
    <div className="user-profile-heading">
      <h1>User Profile</h1>
    </div>
    <div className="user-dashboard-container">
      <div className="user-dashboard">
        <ul className="user-dashboard-list">
          {userDashboard.map((each) => (
            <li className="user-list">{each}</li>
          ))}
        </ul>
      </div>
      <div className="order-details-container">
        <h2 className="order-details-main-heading">Order Detail</h2>
        <table cellPadding="3">
          <thead>
            <tr >
            <th>Date <BsCaretDown/></th>
            <th>Order ID <BsCaretDown/></th>
            <th>From <BsCaretDown/></th>
            <th>Destination <BsCaretDown/></th>
            <th>Recipient <BsCaretDown/></th>
            <th>Carrier Log <BsCaretDown/></th>
            <th>Item <BsCaretDown/></th>
            <th>Amount <BsCaretDown/></th>
            <th>Status <BsCaretDown/></th>
            </tr>
          </thead>
          <tbody>
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
        <h2 className="order-details-main-heading">Help Desk Items</h2>
        <table cellPadding="3">
          <thead>
            <tr >
            <th>Date <BsCaretDown/></th>
            <th>Ticket ID <BsCaretDown/></th>
            <th>Ticket Type <BsCaretDown/></th>
            <th>Short Description <BsCaretDown/></th>
            <th>Status <BsCaretDown/></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>02/14/2023</td>
              <td>TKT1234NJ</td>
              <td>Shipment</td>
              <td>Goods held at customs</td>
              <td>Work in progress</td>
            </tr>
            <tr>
              <td>02/14/2023</td>
              <td>TKT1234NJ</td>
              <td>Shipment</td>
              <td>Goods held at customs</td>
              <td>Work in progress</td>
            </tr>
          </tbody>
        </table>
        <h2 className="order-details-main-heading">Forward Shipping</h2>
        <table cellPadding="3">
          <thead>
            <tr >
            <th>Package <BsCaretDown/></th>
            <th>Sent Package <BsCaretDown/></th>
            <th>Expected Package <BsCaretDown/></th>
            <th>Assisted Package <BsCaretDown/></th>
            <th>Action Require <BsCaretDown/></th>
            <th>In Progress <BsCaretDown/></th>
            <th>Ready to Ship <BsCaretDown/></th>
            <th>Balance A <BsCaretDown/></th>
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
