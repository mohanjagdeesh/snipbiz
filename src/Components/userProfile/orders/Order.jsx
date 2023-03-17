import { useState } from 'react';
import { BsCaretDown } from "react-icons/bs";
import TableOrdersDetails from '../tableOrderDetails/TableOrderDetails';


const tableOrdersDatas = [{
    id: 1,
    date: '02/14/2023',
    orderId: 'XB1234VIOUSAIN',
    from: 'Edison, NJ US',
    destination: 'Mumbai',
    recipient: 'Victor',
    carrierLog: 'DHL',
    item: 'Cloths',
    amount: '$52.68',
    status: 'Pendind',
    isOrderDisplay: true

},
{
    id: 2,
    date: '02/14/2023',
    orderId: 'XB1234VIOUSAIN',
    from: 'Edison, NJ US',
    destination: 'Mumbai',
    recipient: 'Victor',
    carrierLog: 'DHL',
    item: 'Cloths',
    amount: '$52.68',
    status: 'Recived',
    isOrderDisplay: false

},
{
    id: 3,
    date: '02/14/2023',
    orderId: 'XB1234VIOUSAIN',
    from: 'Edison, NJ US',
    destination: 'Mumbai',
    recipient: 'Victor',
    carrierLog: 'DHL',
    item: 'Cloths',
    amount: '$52.68',
    status: 'completed',
    isOrderDisplay: false

},
{
    id: 4,
    date: '02/14/2023',
    orderId: 'XB1234VIOUSAIN',
    from: 'Edison, NJ US',
    destination: 'Mumbai',
    recipient: 'Victor',
    carrierLog: 'DHL',
    item: 'Cloths',
    amount: '$52.68',
    status: 'completed',
    isOrderDisplay: false
}]

const Order = () => {

    const [tableOrderData, setTableOrderData] = useState(tableOrdersDatas)

    const onClickOrderDetails = (id) => {
        const updatedOrderData = tableOrderData.map(eachData => {
            if (eachData.id === id) {
                const updatedData = { ...eachData, isOrderDisplay: true }
                return updatedData
            }
            const updateData = { ...eachData, isOrderDisplay: false }
            return updateData
        })
        setTableOrderData(updatedOrderData)
    }





    return (
        <div data-testid="orders-content" className='orders-container'>
        <h3 className="orders-head">Order Detail</h3>
        <table>
          <thead className='table-head'>
            <tr>
              <th className='table-head-name'>Date <BsCaretDown /></th>
              <th className='table-head-name'>Order ID <BsCaretDown /></th>
              <th className='table-head-name'>From <BsCaretDown /></th>
              <th className='table-head-name'>Destination <BsCaretDown /></th>
              <th className='table-head-name'>Recipient <BsCaretDown /></th>
              <th className='table-head-name'>Carrier Log <BsCaretDown /></th>
              <th className='table-head-name'>Item <BsCaretDown /></th>
              <th className='table-head-name'>Amount <BsCaretDown /></th>
              <th className='table-head-name'>Status <BsCaretDown /></th>
            </tr>
          </thead>
          <tbody data-testid="table-body">
            {tableOrderData.map(eachData => (
              <TableOrdersDetails key={eachData.id} orderDetails={eachData} onClickOrderDetails={onClickOrderDetails} />
            ))}
          </tbody>
        </table>
      </div>
      
    )
}

export default Order