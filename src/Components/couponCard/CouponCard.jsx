import './CouponCard.css'


const CouponCard = ({eachOffer}) => {

    return(
        <div className='card'>
            <p className='offer-per'>{eachOffer.offerPercent}</p>
            <p className='offer-type'>{eachOffer.offerType}</p>
            <p className='expiry'>{eachOffer.expiry}</p>
            <button className='copy-promo-btn' type='button'>Copy Promo Code</button>
        </div>
    )
}

export default CouponCard