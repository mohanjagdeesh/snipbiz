import { Box } from '@mui/material'
import React from 'react'
import LandingPage from '../LandingPage/LandingPage'
import Navbaar from '../Navbaar/Navbaar'
import ShipForwarding from '../ShipForwarding/ShipForwarding'

const Home = () => {
  return (
    <Box>
      <Navbaar/>
      <LandingPage/>
      <ShipForwarding/>
    </Box>
  )
}

export default Home
