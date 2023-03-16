import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import Partners from '../Partners/Partners';
import Faq from "../faq/Faq";
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";
import BlogPage from "../BlogPages/BlogPage";
import MyCoupons from "../myCoupons/MyCoupons";
import UsDebitCard from "../UserProfile/UsDebitCard/UsDebitCard";
import Contacts from "../contact/Contacts";
import TrackingSection from '../TrackingPage/TrackingSection';
import HowitWorks from '../HowitWorks/HowitWorks';
// import TermsAndConditions from '../termsAndConditions/Termsandconditions';

const routes = [
    { path: "/home", component: Home },
    { path: "/partners", component: Partners  },
    { path: "/contact", component: Contacts },
    { path: "/faq", component: Faq },
    { path: "/privacy", component: PrivacyPolicy },
    { path: "/blogs", component: BlogPage },
    { path: "/mycoupon", component: MyCoupons },
    { path: "/usdebitcard", component: UsDebitCard },
    { path: "/tracking", component: TrackingSection },
    // { path: "/terms/conditions", component: TermsAndConditions },
    { path: "/privacy", component: PrivacyPolicy },
    { path: "/how-it-works", component: HowitWorks },

    


  ];
const RouTe = () => {
  return (
    <>
    <Routes>

       {routes.map((route) => (
           <Route
           key={route.path}
           path={route.path}
           element={<route.component/>}
           />
           ))}
           </Routes>
    </>
  )
}

export default RouTe
