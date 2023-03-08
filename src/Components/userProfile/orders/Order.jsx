import { useState } from 'react';
import './Order.css'
import { v4 as uuidv4 } from 'uuid'
import { BsCaretDown } from "react-icons/bs";
import TableOrdersDetails from '../tableOrderDetails/TableOrderDetails';


const tableOrdersDatas = [{
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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

const Orders = () => {

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

    const tableDetails = () => (
        <table>
            <thead className='table-head'>
                <tr >
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
            <tbody>
                {tableOrderData.map(eachData => (
                    <TableOrdersDetails key={eachData.id} orderDetails={eachData} onClickOrderDetails={onClickOrderDetails} />
                ))}
            </tbody>
        </table>
    )



    return (
        <div className='orders-container'>
            <h3 className="orders-head">Order Detail</h3>
            {tableDetails()}
        </div>
    )
}

export default Orders