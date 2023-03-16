import { useState } from "react";
import "./Messages.scss";
import { v4 as uuidv4 } from "uuid";



export const tablesData = [
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
    <tr data-testid="message-details">
      <td colSpan="3">
        <div className="message-details-card">
          <div className="message-details">
            <div className="message-address-data">
              <div>
                <h4>Summary:</h4>
                <p data-testid="order-number">Order# : 423423</p>
                <p data-testid="order-date">Order Date: 25,February,2023</p>
                <p data-testid="order-total">Order Total: $250.00</p>
              </div>
              <hr />
              <div>
                <h4>Shipping Address:</h4>
                <p data-testid="shipping-company">Miss Bean officials</p>
                <p data-testid="shipping-street">123 street Average</p>
                <p data-testid="shipping-city-state">Boston, Ma</p>
              </div>
            </div>
            <div className="message-address-second">
              <p>ITEM SHIPPED</p>
              <p>
                <span> QTY</span> <span>PRICE</span>
              </p>
            </div>
            <div className="message-address-second-one" data-testid="item1">
              <p data-testid="item1-description">20+ Email Templates</p>
              <p>
                <span data-testid="item1-quantity">X3</span>{" "}
                <span data-testid="item1-price">$242.0</span>
              </p>
            </div>
            <hr />
            <div className="message-address-second-one" data-testid="item2">
              <p data-testid="item2-description">20+ Email Templates</p>
              <p>
                <span data-testid="item2-quantity">X3</span>{" "}
                <span data-testid="item2-price">$242.0</span>
              </p>
            </div>
            <div className="message-total">
              <p data-testid="subtotal">Subtotal(2 items): $442</p>
              <p data-testid="shipping-cost">Flat-Rate Shipping: $442</p>
              <p data-testid="estimated-tax">Estimated Tax: $442</p>
              <p data-testid="order-total-amount">Order Total: $442</p>
            </div>
            <button className="call-btn" data-testid="call-button">
              Call us at (+1) 401-5344-342
            </button>
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
    <div className="Messages-Profile" data-testid="messages-profile">
      <div className="nav">
    <table cellPadding="15" data-testid="message-table">
      <caption>Message </caption>
      <thead>
        <tr>
          <th width="70%" data-testid="table-header-subject">Subject</th>
          <th data-testid="table-header-send-date">Send Date</th>
          <th data-testid="table-header-delete">Delete</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((eachData) => (
          <>
            <tr key={eachData.id} onClick={() => onClickTableData(eachData.id)} data-testid={`table-row-${eachData.id}`}>
              <td data-testid={`table-row-subject-${eachData.id}`}>{eachData.subject}</td>
              <td data-testid={`table-row-send-date-${eachData.id}`}>{eachData.sendDate}</td>
              <td data-testid={`table-row-delete-${eachData.id}`}>delete</td>
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
