import "./UserProfileDashboard.css"

import { BsCaretDown } from "react-icons/bs";


const UserProfileDashboard = () => {
  return(
    <div className="user-dashboard-container" data-testid="user-dashboard-container">
      <div className="order-details-container" data-testid="order-details-container">
        <h2 className="order-details-main-heading" data-testid="order-details-main-heading">Order Detail</h2>
        <table cellPadding="3" data-testid="order-details-table" className="table-order">
          <thead>
            <tr className="track">
            <th className="thead-heading"><div className="arrow-down">Date <BsCaretDown data-testid="date-caret"/></div></th>
            <th className="thead-heading"><div className="arrow-down">Order ID <BsCaretDown data-testid="order-id-caret"/></div></th>
            <th className="thead-heading">From</th>
            <th className="thead-heading">Destination</th>
            <th className="thead-heading">Recipient</th>
            <th className="thead-heading"><div className="arrow-down">Carrier Log <BsCaretDown data-testid="carrier-log-caret"/></div></th>
            <th className="thead-heading">Item</th>
            <th className="thead-heading">Amount</th>
            <th className="thead-heading"><div className="arrow-down">Status <BsCaretDown data-testid="status-caret"/></div></th>
            </tr>
          </thead>
          <tbody data-testid="order-details-table-body">
            <tr className="track">
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
            <tr className="track">
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
            <tr className="track">
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
            <tr className="track td">
              <td>02/14/2023</td>
              <td>XB1234VIOUSAIN</td>
              <td>Edison, NJ US</td>
              <td>Mumbai</td>
              <td>Victor</td>
              <td>DHL</td>
              <td>Cloths</td>
              <td>$52.68</td>
              <td className="td">Recieve</td>
            </tr>
          </tbody>
        </table>
        <h2 className="order-details-main-heading" data-testid="help-desk-heading">Help Desk Items</h2>
        <table cellPadding="3" data-testid="help-desk-table" className="table-order">
          <thead>
            <tr data-testid="help-desk-table-header" className="track">
            <th data-testid="date-header" className="thead-heading"><div className="arrow-down">Date <BsCaretDown/></div></th>
            <th data-testid="ticket-id-header" className="thead-heading">Ticket ID</th>
            <th data-testid="ticket-type-header" className="thead-heading">Ticket Type</th>
            <th data-testid="short-description-header" className="thead-heading">Short Description</th>
            <th data-testid="status-header" className="thead-heading">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr data-testid="help-desk-table-row" className="track">
              <td data-testid="date-cell">02/14/2023</td>
              <td data-testid="ticket-id-cell">TKT1234NJ</td>
              <td data-testid="ticket-type-cell">Shipment</td>
              <td data-testid="short-description-cell">Goods held at customs</td>
              <td data-testid="status-cell">Work in progress</td>
            </tr>
            <tr data-testid="help-desk-table-row" className="track">
              <td data-testid="date-cell">02/14/2023</td>
              <td data-testid="ticket-id-cell">TKT1234NJ</td>
              <td data-testid="ticket-type-cell">Shipment</td>
              <td data-testid="short-description-cell">Goods held at customs</td>
              <td data-testid="status-cell">Work in progress</td>
            </tr>
          </tbody>
        </table>
        <h2 className="order-details-main-heading" data-testid="forward-shipping-heading">Forward Shipping</h2>
        <table cellPadding="3" data-testid="forward-shipping-table" className="table-order">
          <thead>
            <tr data-testid="forward-shipping-table-header" className="track">
            <th data-testid="package-header" className="thead-heading">Package</th>
            <th data-testid="sent-package-header" className="thead-heading">Sent Package</th>
            <th data-testid="expected-package-header" className="thead-heading">Expected Package</th>
            <th data-testid="assisted-package-header" className="thead-heading">Assisted Package</th>
            <th data-testid="action-required-header" className="thead-heading">Action Require</th>
            <th data-testid="in-progress-header" className="thead-heading">In Progress</th>
            <th data-testid="ready-to-ship-header" className="thead-heading">Ready to Ship</th>
            <th data-testid="balance-a-header" className="thead-heading">Balance A</th>
            </tr>
          </thead>
          <tbody>
            <tr className="track">
              <td>3</td>
              <td>4</td>
              <td>1</td>
              <td>6</td>
              <td>Held in customs</td>
              <td>5</td>
              <td>8</td>
              <td>$500</td>
            </tr>
            <tr className="track">
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
  )
}
export default UserProfileDashboard;
