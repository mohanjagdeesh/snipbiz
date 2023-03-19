import { useState } from 'react';
import "./viewTransactions.css"


const ViewTransactions = () => {
  const [selectedCard,setSelectedCard]=useState(1)
  const renderSelectedCardTransactions=()=>{
    switch (selectedCard) {
      case 1:
        return(
          <table cellPadding="3" key={selectedCard} className="table">
              <thead>
                <tr className='track' >
                <th className='thead'>Date</th>
                <th className='thead'>Transaction ID</th>
                <th className='thead'>Description</th>
                <th className='thead'>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className='track td'>
                  <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr className='track td'>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr className='track td'>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
                <tr className='track td'>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$52.68</td>
                </tr>
              </tbody>
            </table>
        )
      case 2:
        return(
          <table cellPadding="3" key={selectedCard} className="table">
              <thead>
                <tr className='track td'>
                <th className='thead'>Date</th>
                <th className='thead'>Transaction ID</th>
                <th className='thead'>Description</th>
                <th className='thead'>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className='track td'>
                  <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$17.68</td>
                </tr>
                <tr className='track td'>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$44.68</td>
                </tr>
                <tr className='track td'>
                <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$35.68</td>
                </tr>
                <tr className='track td'>
                  <td>02/14/2023</td>
                  <td>XB1234VIOUSAIN</td>
                  <td>Payment towards Snipbiz.com shipping forward </td>
                  <td>-$50.68</td>
                </tr>
              </tbody>
            </table>
        )
      default:
        return null
    }
  }

  return(
          <div className="debit-card-container">
            <div className="card-container">
              <div className={selectedCard===1?"card-1 card-border":"card-1"} onClick={()=>setSelectedCard(1)}>
                   <div>
                    <h1 className='card-heading'>Wiilam Thomas</h1>
                    <div className='amount-container'>
                      <div>
                      <p className='amount'>Amount Purchased</p>
                      <p className='amount'>$500.00</p>
                      </div>
                      <div>
                      <p className='amount'>Balance Amount</p>
                      <p className='balance-amount amount'>$150.00</p>
                      </div>
                    </div>
                    <div>
                      <p className='amount'>8569 5478 2587 3333</p>
                    </div>
                    <div className='valid-container'>
                    <p className='valid amount'>VALID THRU</p>
                    <p className='valid-year amount'>07/24</p>
                    </div>
                   </div>
                </div>
              
              <div className={selectedCard===2?"card-1 card-border":"card-1"} onClick={()=>setSelectedCard(2)}>
                   <div>
                    <h1 className='card-heading'>Wiilam Thomas</h1>
                    <div className='amount-container'>
                      <div>
                      <p className='amount'>Amount Purchased</p>
                      <p className='amount'>$500.00</p>
                      </div>
                      <div>
                      <p className='amount'>Balance Amount</p>
                      <p className='balance-amount amount'>$150.00</p>
                      </div>
                    </div>
                    <div>
                      <p className='amount'>8569 5478 2587 3333</p>
                    </div>
                    <div className='valid-container'>
                    <p className='valid amount'>VALID THRU</p>
                    <p className='valid-year amount'>07/24</p>
                    </div>
                   </div>
                </div>
                
            </div>
            {renderSelectedCardTransactions()}

          </div>
  )
}
export default ViewTransactions;