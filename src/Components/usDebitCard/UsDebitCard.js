import { useState } from 'react';
import './UsDebitCard.css';
import Tabs from "./tabs/Tabs"

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


const UsDebitCard = () => {
  const [selectedCard,setSelectedCard]=useState(1)
  const renderSelectedCardTransactions=()=>{
    switch (selectedCard) {
      case 1:
        return(
          <table cellPadding="3" key={selectedCard}>
              <thead>
                <tr >
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Description</th>
                <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
              </tbody>
            </table>
        )
        break;
      case 2:
        return(
          <table cellPadding="3" key={selectedCard}>
              <thead>
                <tr >
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Description</th>
                <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$50.68</td>
                </tr>
              </tbody>
            </table>
        )
      break;
      default:
        return null
        break;
    }
  }

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
        <div className="us-debit-card-container">
            <h1 className="debit-card-heading">US Debit Card</h1>
            <Tabs/>
          <div className="container">
            <div className="card-container">
              <div className='card-1' onClick={()=>setSelectedCard(1)}>
                   <div>
                    <h1>Wiilam Thomas</h1>
                    <div className='amount-container'>
                      <div>
                      <p>Amount Purchased</p>
                      <p>$500.00</p>
                      </div>
                      <div>
                      <p>Balance Amount</p>
                      <p className='balance-amount'>$150.00</p>
                      </div>
                    </div>
                    <div>
                      <p>8569 5478 2587 3333</p>
                    </div>
                    <div className='valid-container'>
                    <p className='valid'>VALID THRU</p>
                    <p className='valid-year'>07/24</p>
                    </div>
                   </div>
                </div>
              
              <div className='card-1' onClick={()=>setSelectedCard(2)}>
                   <div>
                    <h1>Wiilam Thomas</h1>
                    <div className='amount-container'>
                      <div>
                      <p>Amount Purchased</p>
                      <p>$500.00</p>
                      </div>
                      <div>
                      <p>Balance Amount</p>
                      <p className='balance-amount'>$150.00</p>
                      </div>
                    </div>
                    <div>
                      <p>8569 5478 2587 3333</p>
                    </div>
                    <div className='valid-container'>
                    <p className='valid'>VALID THRU</p>
                    <p className='valid-year'>07/24</p>
                    </div>
                   </div>
                </div>
                
            </div>
            {renderSelectedCardTransactions()}

          </div>
        </div>
    </div>
      </div>
  )
}
export default UsDebitCard;