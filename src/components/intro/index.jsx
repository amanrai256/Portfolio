import React from 'react'
import "./style.scss";
import cloud from "../../images/cloud.png";
import cloudSoft from "../../images/cloud-soft.png";
// import CallToAction from "../../shared/CallToAction";
import Navigation from './navigation-bar';
import IntroContent from './Intro-content';
const Intro = () => {
  return (
    <div className="Intro-section">
        <div 
          className="vector-bg"
          id="parallax">
            
        </div>
        <img src={cloud} alt="" className='cloud' />
        <img src={cloudSoft} alt="" className='cloud-soft' />
        <div className="content">
            <Navigation></Navigation>
            <IntroContent/>
            {/* <CallToAction/> */}
        </div>
    </div>
  )
}

export default Intro

// import React from "react";

// import Navigation from "./navigation-bar";
// import IntroContent from "./intro-content";
// import cloud from "../../images/cloud.png";
// import cloudSoft from "../../images/cloud-soft.png";

// import "./style.scss";

// const Intro = () => {
//     return (
//         <div className="Intro-section">
//             <div
//                 className="vector-bg"
//                 id="parallax"
//             ></div>
//             <img
//                 src={cloud}
//                 className="cloud"
//             />
//             <img
//                 src={cloudSoft}
//                 className="cloud-soft"
//             />
//             <div className="content">
//                 <Navigation />
//                 <IntroContent />
//             </div>
//         </div>
//     );
// };

// export default Intro;