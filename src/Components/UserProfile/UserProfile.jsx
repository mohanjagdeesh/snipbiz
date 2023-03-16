import "./Cancellation.scss";


const UserProfile = () => {
  return (
    <div className="User-Profile" data-testid="user-profile">
  

  <div className="nav">
<<<<<<<< HEAD:src/Components/UserProfile/Cancellation.js
    <nav className="nav-list">
      <ul className="User-profile-list" data-testid="user-profile-list">
        {UserProfileList.map((list, index) => (
          <li key={index} data-testid={`user-profile-item-${index}`}>
            {list}
          </li>
        ))}
      </ul>
    </nav>

========
>>>>>>>> c096f31 (complete routes):src/Components/UserProfile/UserProfile.jsx
    <table cellPadding="13" data-testid="user-profile-table">
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
        <tr data-testid="user-profile-row-1">
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
        <tr data-testid="user-profile-row-2">
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
        <tr data-testid="user-profile-row-3">
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
        <tr data-testid="user-profile-row">
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
