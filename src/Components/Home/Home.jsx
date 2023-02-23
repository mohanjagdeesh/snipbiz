import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import LandingPage from '../LandingPage/LandingPage'
import Navbar from '../Navbar/Navbar'
import ShipForwarding from '../ShipForwarding/ShipForwarding'
import Footer from '../footerSection/Footer'
import OurPartners from '../ourPartners/OurPartners'
import YouArein from '../youAreInGoodHands/YouArein'
import ServicingDestiny from "../servicingDestiny/ServicingDestiny"
const Home = () => {
  
  return (
    <>
    <Box>   
      <Navbar/>
      <LandingPage/>
      <ShipForwarding/>
      <YouArein/>
      <OurPartners/>
      <ServicingDestiny/>
      {/* <HowitWorks/> */}
      {/* <ServicesInfo/> */}
      {/* <PrivacyPolicy/> */}
      {/* <Contacts/> */}
      <Footer/>
    </Box>
    </>
  )
}

export default Home
