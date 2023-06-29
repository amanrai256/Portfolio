import React from 'react'
import "./style.scss"
import Section from "../shared/section";
import techIcons from "../../images/tech-icons.png"
import {AiOutlineCloudDownload} from "react-icons/ai";
import CallToAction from '../shared/CallToAction';
const Skills = () => {
  return (
    <Section background="dark" id="skills">
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img src={techIcons} alt="JS,REACT,HTML,CSS" />
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti tenetur eveniet temporibus dolores, placeat incidunt, culpa veritatis repudiandae assumenda quos inventore numquam architecto minima obcaecati vero quis maxime quas rerum accusantium dolore necessitatibus voluptatem! Quisquam.</p>
                <CallToAction text="Download Cv" icon={<AiOutlineCloudDownload/>}/>
            </div>
        </div>
        </Section>
  )
}

export default Skills