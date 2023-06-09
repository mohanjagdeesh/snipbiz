    import "./ShipForwarding.css"
    import Typography from "@mui/material/Typography";
    const ShipForwarding = () => (
        <div className="ship-container">
            <h1 className="ship-heading">Ship Forwarding</h1>
            <div className="forward-cont">
                <div className="orange-cont" data-testid="orange-cont-1">
                    <Typography variant="body2" className="para">Signup & get USA
                        Address </Typography>
                    <img className="circles" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276073/Group_72_mkeqj0.png" alt="orange" />
                    <img className="orange-icon" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276086/ic_twotone-warehouse_c5spgh.png" alt="warehouse" />
                </div>
                <div className="blue-cont" data-testid="blue-cont-1">
                    <img className="circles" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276096/Group_75_zc47ai.png" alt="orange" />
                    <img className="blue-icon" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276107/Group_78_b772y0.png" alt="warehouse" />
                    <Typography variant="body2" className="para">Signup & get USA
                        Address </Typography>
                </div>
                <div className="orange-cont" data-testid="orange-cont-2">
                    <Typography variant="body2" className="para">Signup & get USA
                        Address </Typography>
                    <img className="circles" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276073/Group_72_mkeqj0.png" alt="orange" />
                    <img className="orange-icon" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276117/ph_package-duotone_kdltpk.png" alt="warehouse" />
                </div>
                <div className="blue-cont" data-testid="blue-cont-2">
                    <img className="circles" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276096/Group_75_zc47ai.png" alt="orange" />
                    <img className="blue-icon" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276128/Vector_vqupbq.png" alt="warehouse" />
                    <Typography variant="body2" className="para">Signup & get USA
                        Address </Typography>
                </div>
                <div className="orange-cont" data-testid="orange-cont-3">
                    <p className="para">Signup & get USA
                        Address </p>
                    <img className="circles" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276073/Group_72_mkeqj0.png" alt="orange" />
                    <img className="orange-icon" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276165/Mask_group_g8fyja.png" alt="warehouse" />
                </div>
                <div className="blue-cont" data-testid="blue-cont-3">
                    <img className="circles" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276096/Group_75_zc47ai.png" alt="orange" />
                    <img className="blue-icon" src="https://res.cloudinary.com/duapyyftc/image/upload/v1676276174/ic_twotone-support-agent_qtcwzw.png" alt="warehouse" data-testid="blue-icon" />
                    <Typography variant="body2" className="para" data-testid="usa-address">Signup & get USA Address</Typography>
                </div>
            </div>
            <div>
                <button className="know-more" data-testid="know-more">Know more</button>
                <button className="start-shipping" data-testid="start-shipping">Start shipping</button>
            </div>
        </div>

    )



    export default ShipForwarding