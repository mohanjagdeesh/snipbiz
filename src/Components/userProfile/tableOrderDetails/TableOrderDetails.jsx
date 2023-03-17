import image22 from '../../howItWorks/img1.png';
import collectLabel1 from '../../howItWorks/img1.png';


const TableOrdersDetails = (props) => {
    const { orderDetails, onClickOrderDetails } = props
    const { id, date, orderId, from, destination, recipient, carrierLog, item, amount, status, isOrderDisplay } = orderDetails


    const statusTable = () => (

        <div>
            <table className='status-table-head'>
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

        <tr>
            <td colSpan="9">
                <div className='order-details-middle-card'>
                    <div className='order-status'>
                        <div className='shipment-card'>
                            <p className='shipment-name'>Shipment 1 with 1 parcel: PMSUH8G6</p>
                            <p className='status-name'>Status:<span className='status-span-name'>Pending</span></p>
                        </div>
                        <img className='ems-img' src={image22} alt='EMS' />
                        {statusTable()}
                        <h1 className='cancle-order-head'>Cancel this Order</h1>
                    </div>
                    <div className='middle-caerd2'>
                        <div className='from-address-card'>
                            <div className='from-card1'>
                                <p className='from-card1-para'><span className='from-card1-span-para'>FROM:</span><br /> John Doe Example Corp 4009 Marathon Blvd Austin TX 78756</p>
                                <p className='from-card1-para-num'>(908) 999 9898</p>
                            </div>
                            <div className='from-card2'>
                                <p className='from-card2-para'>Ship Date: 07 FEB23<br /> ACTWGT: 0.06 LB<br /> CAD: 112001404/WSX13500</p>
                            </div>
                        </div>
                        <div className='to-address-card'>
                            <div className='to-card-info'>
                                <p className='to-card-para'><span className='to-card-span-para'>TO</span><br />
                                    David Miller<br />
                                    Test Co<br />
                                    500 South Buena Vista Street<br />
                                    Burbank CA 91521<br />
                                    (604) 898 9898
                                    <span className='ref-span'>REF:</span>
                                </p>
                                <div className='us-para-card'>
                                    <p className='us-para'>(US)</p>
                                </div>
                            </div>
                            <p className='inv-para'>INV:</p>
                            <div className='po-dep-card'>
                                <p className='po-para'>PO:</p>
                                <p className='inv-para'>DEPT:</p>
                            </div>
                        </div>
                        <div className='middle-card-part3'>
                            <div className='trk-collect-part'>
                                <p className='trk-para'><span className='trk-span'>TRK#</span>3945 9445 9756</p>
                                <p className='collect-para'>COLLECT</p>
                            </div>
                            <p className='part3-num-para'>91521</p>
                        </div>
                        <img src={collectLabel1} alt='collectLabel1' className='collectLabel1-img' />
                    </div>
                </div>
            </td>
        </tr>






    )



    return (
        <>
            <tr onClick={() => onClickOrderDetails(id)}>
                <td className='table-body-name'>{date}</td>
                <td className='table-body-name'>{orderId}</td>
                <td className='table-body-name'>{from}</td>
                <td className='table-body-name'>{destination}</td>
                <td className='table-body-name'>{recipient}</td>
                <td className='table-body-name'>{carrierLog}</td>
                <td className='table-body-name'>{item}</td>
                <td className='table-body-name'>{amount}</td>
                <td className='table-body-name pending-status'>{status}</td>
            </tr>

            {isOrderDisplay && orderDetailesMiddleCard()}

        </>
    )
}
export default TableOrdersDetails