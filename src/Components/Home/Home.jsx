import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import Navbar from '../Navbar/Navbar'
import ShipForwarding from '../ShipForwarding/ShipForwarding'
import OurPartners from '../ourPartners/OurPartners'
import YouArein from '../youAreInGoodHands/YouArein'
import ServicingDestiny from "../servicingDestiny/ServicingDestiny"
import { useGlobalStore } from '../../store/useGlobalStore'

import Carousel from '../Carousel/Carousel'
const Home = () => {
  
  return (
    <>
    <Box>   
      <LandingPage/>
      <ShipForwarding/>
      <YouArein/>
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
