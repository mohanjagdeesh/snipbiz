import { useState } from 'react'
import CouponCard from '../couponCard/CouponCard'
import './MyCoupons.css'

const couponsList = [{
    id:1,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},{
    id:2,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},{
    id:3,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},{ id:4,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},{id:5,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},{id:6,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},{id:7,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},{id:8,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},{id:9,
    offerPercent:'15%',
    offerType:'Discount 15% to Free Shipping',
    expiry:'Expires on: 03/10/2023'
},]

const MyCoupons = () => {
    const [coupons,setCoupons] = useState(couponsList)

    return(
        <div className='coupons-main-cont' data-testid="coupons-container">
        <p className='coupons-head' data-testid="coupons-heading">My Coupons</p>
        <div className='coupons-cards-cont' data-testid="coupons-cards-container">
            {coupons.map(eachOffer => (
                <CouponCard eachOffer={eachOffer} key={eachOffer.id} data-testid={`coupon-card-${eachOffer.id}`}/>
            ))}
        </div>
</div>
)
    }
export default MyCoupons