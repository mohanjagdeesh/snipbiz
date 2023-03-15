
import './TableOrderDetails.css'
import image22 from './image22.png';
import collectLabel1 from './collectLabel1.png';


const TableOrdersDetails = (props) => {
    const { orderDetails, onClickOrderDetails } = props
    const { id, date, orderId, from, destination, recipient, carrierLog, item, amount, status, isOrderDisplay } = orderDetails


    const statusTable = () => (

        <div>
            <table className='status-table-head' data-testid="status-table-head">
                <thead className='table-head'>
                    <tr >
                        <th className='status-table-head-name'>Shipment Info: </th>
                        <th className='status-table-head-name'>From: </th>
                        <th className='status-table-head-name'>To: </th>
                        <th className='status-table-head-name price-info'>Price:</th>
                        <th className='status-table-head-name tax-info'>Tax:</th>
                    </tr>
                </thead>
            </table>
            <div className='status-table-data'>
                <div className='shipment-info-data'>
                    <p className='shipment-para1'>EMS Parcel Post</p>
                    <p className='shipment-para2'> 14 to 21 business days delivery</p>
                    <p className='shipment-para2'><span className='protocted-value'>Protected value:</span> No protection cover</p>
                    <p className='parcel-info'>Parcel Information</p>
                    <p className='parcel-info'>Customs Declaration</p>
                    <p className='parcel-info'>Restricted and Prohibited Items</p>
                </div>
                <div className='from-data'>
                    <p className='from-para'>A suitable drop off location</p>
                </div>
                <div className='to-data'>
                    <p className='to-para'>John Doe Example Corp 4009 Marathon Blvd Austin TX 78756 </p>
                </div>
                <div className='price-data'>
                    <p className='price-para'>$40.54</p>
                </div>
                <div className='tax-data'>
                    <p className='price-para'>$0.00</p>
                </div>
            </div>
        </div>
    )

    const orderDetailesMiddleCard = () => (

        <tr data-testid="order-details-middle-card" >
        <td colSpan="9">
            <div className='order-details-middle-card'>
                <div className='order-status'>
                    <div className='shipment-card'>
                        <p className='shipment-name'>Shipment 1 with 1 parcel: PMSUH8G6</p>
                        <p className='status-name'>Status:<span className='status-span-name'>Pending</span></p>
                    </div>
                    <img className='ems-img' src={image22} alt='EMS' />
                    {statusTable()}
                    <h1 className='cancle-order-head' data-testid="cancel-order-head">Cancel this Order</h1>
                </div>
                <div className='middle-caerd2'>
                    <div className='from-address-card' data-testid="from-address-card">
                        <div className='from-card1'>
                    </div>
                    <div className='from-card2'>
                        <img className='collect-label-img' src={collectLabel1} alt='Collect Label' />
                    </div>
                </div>
                <div className='to-address-card' data-testid="to-address-card">
                    <div className='to-card1'>
                        <p className='to-card1-para'><span className='to-card1-span-para'>TO:</span><br /> {recipient}<br />{destination}</p>
                    </div>
                    <div className='to-card2'>
                        <p className='to-card2-para'>Order Date:<span className='to-card2-span-para'> {date}</span></p>
                        <p className='to-card2-para'>Order ID:<span className='to-card2-span-para'> {orderId}</span></p>
                        <p className='to-card2-para'>Carrier/Logistic:<span className='to-card2-span-para'> {carrierLog}</span></p>
                    </div>
                </div>
                <div className='items-card' data-testid="items-card">
                    <table className='items-table' data-testid="items-table">
                        <thead className='items-table-head'>
                            <tr >
                                <th className='items-table-head-name'>ITEMS</th>
                                <th className='items-table-head-name'>QTY</th>
                                <th className='items-table-head-name'>PRICE</th>
                                <th className='items-table-head-name'>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody className='items-table-body'>
                            {item.map((item, index) => (
                                <tr key={index}>
                                    <td className='item-td'>{item.name}</td>
                                    <td className='item-td'>{item.quantity}</td>
                                    <td className='item-td'>{item.price}</td>
                                    <td className='item-td'>{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='total-amount-card'>
                        <p className='total-amount-para'>Total Amount: <span className='total-amount-value'>${amount}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </td>
</tr>





    )
    return (
        <>
             <tr className='order-details-top-card' onClick={onClickOrderDetails} data-testid="order-details-top-card">
                <td className='order-details-top-card-first'>{id}</td>
                <td className='order-details-top-card-second'>{recipient}</td>
                <td className='order-details-top-card-third'>{from}</td>
                <td className='order-details-top-card-fourth'>{destination}</td>
                <td className='order-details-top-card-fifth'>{date}</td>
                <td className='order-details-top-card-sixth'>{orderId}</td>
                <td className='order-details-top-card-seventh'>{carrierLog}</td>
                <td className='order-details-top-card-eighth'>{status}</td>
                <td className='order-details-top-card-nineth'>{isOrderDisplay ? '-' : '+'}</td>
            </tr>
            {isOrderDisplay && orderDetailesMiddleCard()}

        </>
    )
}
export default TableOrdersDetails