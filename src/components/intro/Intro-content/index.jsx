import React from "react";
import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import "./style.scss"
import CallToAction from "../../shared/CallToAction"
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={hand} alt="" />
              </span>
              <span className="text">, I am</span>
            </span>
            <span className="big-text">Rahul Roy</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            omnis qui libero magni fuga, earum cum molestias 
            
          </p>
          <CallToAction text="Contact me"/>
        </div>
        <div className="right-col">
            <img src={girl} alt="" />
            <div className="highlights horizontal">
                <div className="icon">
                    <BsAwardFill/>
                </div>
                <div className="text">Best Design Award</div>
            </div>
            <div className="highlights verticle">
                <div className="icon">
                    <FaUser/>
                </div>
                <div className="text">
                    <span>4k++</span><br/>
                    Happy <br/>Customers
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;


// import React from "react";
// import { BsAwardFill } from "react-icons/bs";
// import { FaUser } from "react-icons/fa";

// import girl from "../../../images/girl.png";
// import hand from "../../../images/hand.png";
// import CallToAction from "../../shared/CallToAction";
// import { scrollToSection } from "../../utils/helpers";

// import "./style.scss";

// const IntroContent = () => {
//     return (
//         <div className="intro-content">
//             <div className="layout">
//                 <div className="left-col">
//                     <h1 className="title">
//                         <span className="small-text">
//                             <span className="text">Hello</span>
//                             <span className="icon">
//                                 <img src={hand} />
//                             </span>
//                             <span className="text">, I Am</span>
//                         </span>
//                         <span className="big-text">Keniya Andrew</span>
//                     </h1>
//                     <p className="title">
//                         Lorem Ipsum is simply dummy text of the printing and
//                         typesetting industry. Lorem Ipsum has been the
//                         industry's standard dummy text ever since the 1500
//                     </p>
//                     <CallToAction
//                         text="Contact me"
//                         action={() => {
//                             scrollToSection("contact");
//                         }}
//                     />
//                 </div>
//                 <div className="right-col">
//                     <img
//                         src={girl}
//                         alt="Hello I am Keniya Andrew"
//                     />

//                     <div className="highlights horizontal">
//                         <div className="icon">
//                             <BsAwardFill />
//                         </div>
//                         <div className="text">Best Design Award</div>
//                     </div>

//                     <div className="highlights verticle">
//                         <div className="icon">
//                             <FaUser />
//                         </div>
//                         <div className="text">
//                             <span>4k+</span>
//                             Happy Customers
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default IntroContent;
