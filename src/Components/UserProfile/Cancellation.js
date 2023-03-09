import "./Cancellation.css";

const UserProfileList = [
  "Dashboard",
  "Orders",
  "Cancellation/Refund",
  "UserProfile",
  "Shipping Address",
  "HelpDask",
  "Forward Shipping",
  "Message Centre",
  "My Saved Cards",
  "US Debit Card",
  "My Coupons",
];
const UserProfile = () => {
  return (
    <div className="User-Profile">
      <div className="User-profile-heading">
        <h1>UserProfile</h1>
      </div>

      <div className="nav">
        <nav className="nav-list">
          <ul className="User-profile-list">
            {UserProfileList.map((list) => (
              <li>{list}</li>
            ))}
          </ul>
        </nav>

        <table cellPadding="13">
        <caption>Cancellation/Refund</caption>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order ID</th>
              <th>From</th>
              <th>Destination</th>
              <th>Recipient</th>
              <th>Carrier Log</th>
              <th>Amount</th>
              <th>Cancelled</th>
              <th>Refund</th>
              <th>Status</th>
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
                <td>$52.68</td>
                <td className="color-red">Pending</td>
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
                <td>$52.68</td>
                <td className="color-orange">In Progress</td>
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
                <td>$52.68</td>
                <td className="color-green">Completed</td>
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
                <td>$52.68</td>
                <td className="color-red">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserProfile;
