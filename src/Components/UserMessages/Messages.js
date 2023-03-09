import "./Messages.css";

const UserProfileList = [
  "Dashboard",
  "Orders",
  "Cancellation/Refund",
  "UserProfile",
  "Shipping Address",
  "HelpDask",
  "Message Centre",
  "My Saved Cards",
  "US Debit Card",
  "My Coupons",
  "Forward Shipping",
];
const Messages = () => {
  return (
    <div className="Messages-Profile">
      <div className="Messages-heading">
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

        <table cellPadding="15">
          <caption>Message </caption>
          <thead>
            <tr>
              <th width="70%">Subject</th>
              <th >Send Date</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email subject message here</td>
                <td>02/03/2023</td>
                <td>Delete</td>
              </tr>
              <tr>
                <td>Email subject message here</td>
                <td>02/03/2023</td>
                <td>Delete</td>
              </tr>

              <div className="message-details">
                <div>
                  <div>
                    <h6>Summary:</h6>
                    <p>Order# : 423423</p>
                    <p>Order Date: 25,February,2023</p>
                    <p>Order Total: $250.00</p>                  
                  </div>
                  <div><h6>Shipping Address:</h6></div>
                </div>
                <div></div>
                <div></div>
              </div>



              <tr>
                <td>Email subject message here</td>
                <td>02/03/2023</td>
                <td>Delete</td>
              </tr>
              <tr>
                <td>Email subject message here</td>
                <td>02/03/2023</td>
                <td>Delete</td>
              </tr>




            </tbody>

        </table>
      </div>
    </div>
  );
};
export default Messages;
