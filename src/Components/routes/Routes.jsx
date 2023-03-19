import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Partners from "../Partners/Partners";
import Faq from "../faq/Faq";
import PrivacyPolicy from "../privacyPolicy/PrivacyPolicy";
import BlogPage from "../BlogPages/BlogPage";
import MyCoupons from "../myCoupons/MyCoupons";
import TrackingSection from "../TrackingPage/TrackingSection";
import HowitWorks from "../HowitWorks/HowitWorks";
import ContactForm from "../contactForm/Contact";
import Dashboard from "../UserProfile/Dashborad/Dashboard.jsx";
import TermsAndConditions from "../TermsAndConditions/Termsandconditions";
import Careers from "../Careers/Careers";

const allRoutes = [
  { path: "/home", component: Home },
  { path: "/partners", component: Partners },
  { path: "/contact", component: ContactForm },
  { path: "/faq", component: Faq },
  { path: "/privacy", component: PrivacyPolicy },
  { path: "/blogs", component: BlogPage },
  { path: "/mycoupon", component: MyCoupons },
  { path: "/usdebitcard", component: Dashboard },
  { path: "/tracking", component: TrackingSection },
  { path: "/terms", component: TermsAndConditions },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/dashbard", component: Dashboard },
  { path: "/how-it-works", component: HowitWorks },
  { path: "/careers", component: Careers },
];
export const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {allRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </>
  );
};

export default routes;
