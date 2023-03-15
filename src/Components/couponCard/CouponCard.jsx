import './CouponCard.css'

const CouponCard = ({eachOffer}) => {

    return(
        <div className='card' data-testid='coupon-card'>
            <p className='offer-per' data-testid='offer-percent'>{eachOffer.offerPercent}</p>
            <p className='offer-type' data-testid='offer-type'>{eachOffer.offerType}</p>
            <p className='expiry' data-testid='expiry'>{eachOffer.expiry}</p>
            <button className='copy-promo-btn' data-testid='copy-promo-btn' type='button'>Copy Promo Code</button>
        </div>
    )
}

export default CouponCard
