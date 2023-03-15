import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import Navbar from '../Navbar/Navbar'
import ShipForwarding from '../ShipForwarding/ShipForwarding'
import OurPartners from '../ourPartners/OurPartners'
import ServicingDestiny from "../servicingDestiny/ServicingDestiny"
import YouAreInGoodHands from '../youAreInGoodHands/YouArein'

const Home = () => {

return (
<>
<Box data-testid="home-container">
<LandingPage data-testid="landing-page"/>
<ShipForwarding data-testid="ship-forwarding"/>
<YouAreInGoodHands data-testid="you-are-in-good-hands"/>
<OurPartners data-testid="our-partners"/>
<ServicingDestiny data-testid="servicing-destiny"/>
{/* <HowitWorks/> /}
{/ <ServicesInfo/> /}
{/ <PrivacyPolicy/> /}
{/ <Contacts/> */}
</Box>
</>
)
}

export default Home