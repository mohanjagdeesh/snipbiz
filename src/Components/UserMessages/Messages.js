import { useState } from "react";
import "./Messages.scss";
import { v4 as uuidv4 } from "uuid";
import{MdDeleteOutline} from 'react-icons/md';

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

const tablesData = [
  {
    id: uuidv4(),
    subject: "Email subject message here",
    sendDate: "02/03/2023",
    isMessageDisplay: false,
  },
  {
    id: uuidv4(),
    subject: "Email subject message here",
    sendDate: "02/03/2023",
    isMessageDisplay: false,
  },
  {
    id: uuidv4(),
    subject: "Email subject message here",
    sendDate: "02/03/2023",
    isMessageDisplay: false,
  },
  {
    id: uuidv4(),
    subject: "Email subject message here",
    sendDate: "02/03/2023",
    isMessageDisplay: false,
  },
];
const Messages = () => {
  const [tableData, setTableData] = useState(tablesData);

  const messageDesplay = () => (
    <tr>
      <td colSpan="3">
        <div className="message-details-card">
          <div className="message-details">
            <div className="message-address-data">
              <div>
                <h4>Summary:</h4>
                <p>Order# : 423423</p>
                <p>Order Date: 25,February,2023</p>
                <p>Order Total: $250.00</p>
              </div>
              <hr />
              <div>
                <h4>Shipping Address:</h4>
                <p>Miss Bean officials</p>
                <p>123 street Average</p>
                <p>Boston, Ma</p>
              </div>
            </div>
            <div className="message-address-second">
              <p>ITEM SHIPPED</p>
              <p>
                <span> QTY</span> <span>PRICE</span>
              </p>
            </div>
            <div className="message-address-second-one">
              <p>20+ Email Templates</p>
              <p>
                <span>X3</span> <span>$242.0</span>
              </p>
            </div>
            <hr />
            <div className="message-address-second-one">
              <p>20+ Email Templates</p>
              <p>
                <span>X3</span> <span>$242.0</span>
              </p>
            </div>
            <div className="message-total">
              <p>Subtotal(2 items): $442</p>
              <p>Flat-Rate Shipping: $442</p>
              <p>Estimated Tax: $442</p>
              <p>Order Total: $442</p>
            </div>
            <button className="call-btn">Call us at (+1) 401-5344-342</button>
          </div>
        </div>
      </td>
    </tr>
  );

  const onClickTableData = (id) => {
    const updatedTableData = tableData.map((eachData) => {
      if (eachData.id === id) {
        const updateMessage = { ...eachData, isMessageDisplay: true };
        return updateMessage;
      }
      const regularData = { ...eachData, isMessageDisplay: false };
      return regularData;
    });

    setTableData(updatedTableData);
  };
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

        <table>
          <caption>Message</caption>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Send Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((eachData) => (
              <>
                <tr onClick={() => onClickTableData(eachData.id)}>
                  <td>{eachData.subject}</td>
                  <td>{eachData.sendDate}</td>
                  <td><MdDeleteOutline/></td>
                </tr>
                {eachData.isMessageDisplay && messageDesplay()}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Messages;
