import React, { useState } from 'react'
import plogo from "../../../images/plogo.png"
import {CgMenuRight} from "react-icons/cg"
import {IoMdClose} from "react-icons/io"
import "./style.scss";
import CallToAction from '../../shared/CallToAction';
import {scrollToSection} from "../../utils/helpers"
const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const menuItemClickHandler = (section)=>{
      setMobileMenu(!mobileMenu);
      scrollToSection(section)
  }
  return (
    <div className="top-navigation-bar">
    <div className="app-logo">
        <img
            src={plogo}
            alt="JS Dev"
            height="100px"
        />
    </div>
    <div className="mobile-menu" onClick={()=> setMobileMenu(!mobileMenu) }>
      {
        mobileMenu ? (
          <IoMdClose size={24} color='#fff'/>
        ) : (
          <CgMenuRight size={24} color='#fff'/>
        )
      }
    </div>
    <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span className="navigation-item" onClick={()=>menuItemClickHandler("skills")}>Skills</span>
        <span className="navigation-item" onClick={()=>menuItemClickHandler("portfolio")}>Portfolio</span>
        <span className="navigation-item" onClick={()=>menuItemClickHandler("blogs")}>Blogs & Articles</span>
        <CallToAction text="Contact me" action={()=> scrollToSection("contact")}/>
    </div>
    </div>
  )
}

export default Navigation