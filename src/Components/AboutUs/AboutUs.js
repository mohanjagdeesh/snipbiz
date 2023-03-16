import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AboutUsFour, AboutUsmain, AboutUsOne, AboutUsThree, AboutUsTwo } from "../Constants/AboutUs";
import "./AboutUs.scss";
const navigationList = [{
  id : 1,
  tabName : "Company"
},
{
  id :2 ,
  tabName : "People"
},{
  id : 3,
  tabName : "Partners"
}]
const Aboutus = () => {
  const [activeTab , setActiveTab] = useState("")
  const isTabletOrMobile = useMediaQuery({query: "(max-width:1124px)"});
const renderTabInformation = () => {
  switch (activeTab){
    case "Company" :
      return (
        <div className="About-Pr">
        <p>{AboutUsTwo}</p>
        <p>{AboutUsThree}</p>
        <p>{AboutUsFour}</p> 
        </div>
      )
    case "People" :
      return "people"
    case "Partners" :
      return "partners"
    default :
      return activeTab
  }
}
  return(
    <div className="aboutusmain" data-testid="aboutus-main">
    <div className="aboutheading" data-testid="aboutus-heading">
      <h1>About SnipBiz</h1>
    </div>
<<<<<<< HEAD
    <div className="about-imgcontainer">
      <div className={isTabletOrMobile?"about-img-data-phn":"about-img-data"}>
        <div className={isTabletOrMobile?"about-dataright-phn":"about-dataright"}>
=======
  
    <div className="about-imgcontainer" data-testid="aboutus-img-container">
      <div className={isTabletOrMobile?"about-img-data-phn":"about-img-data"} data-testid="aboutus-img-data">
        <div className={isTabletOrMobile?"about-dataright-phn":"about-dataright"} data-testid="aboutus-data-right">
>>>>>>> f5d7321 (tests have been done)
          <h3>SnipBiz LLC is a Delaware registered company</h3>
          <p>
            {AboutUsmain}
          </p>
          <p>
            {AboutUsOne}
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dipjqwb5e/image/upload/v1676366159/adrian-sulyok-sczNLg6rrhQ-unsplash_1_bw7hss.png"
          alt="img"
          data-testid="aboutus-img"
        />
      </div>
  
      <div className="about-nav" data-testid="aboutus-nav">
        <ul>
          {navigationList.map((list) => {
            const tabActivated = list.tabName === activeTab
            return(
              <li key={list.id}>
                <button  className={`nav-btn ${tabActivated ? "about-active-tab" : ""}`} onClick={() => setActiveTab(list.tabName)}>{list.tabName}</button>
              </li>)
          })}
        </ul>
      </div>
  
      <div className="about-databottom" data-testid="aboutus-data-bottom">
        {renderTabInformation()}
      </div>
    </div>
  </div>
  )
};

export default Aboutus;
