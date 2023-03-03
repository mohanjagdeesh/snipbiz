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
    <Box>   
      <LandingPage/>
      <ShipForwarding/>
      <YouAreInGoodHands/>
      <OurPartners/>
      <ServicingDestiny/>
      {/* <HowitWorks/> */}
      {/* <ServicesInfo/> */}
      {/* <PrivacyPolicy/> */}
      {/* <Contacts/> */}
    </Box>
    </>
  )
}

export default Home
