import pics from "../../images/Screenshot(24)1.png";
import { IconPara } from "./iconPara";
import group from "../../images/fluent_people-community-28-filled.png";
import live from "../../images/fluent_live-24-regular.png";
import idea from "../../images/teenyicons_bulb-on-outline.png";
import chat from "../../images/jam_messages-alt.png";
import growth from "../../images/uil_arrow-growth.png";

export const Features = () => {
    return (<><div className="features-container">
        <div className="programs-heading">
            <h1>Bosscoder End-To-End Solutions</h1>
            <p>to give you an immersive learning experience and help you ace in your tech career</p>
            </div>
            <div className="features-content-img">
                <div className="features-content">
                    <IconPara imgsrc={group} para="World-Class Curriculam, Designed By Industry Experts"/>
                    <IconPara imgsrc={live} para="Live Classes By Intructors Working In Top Tech Companies"/>
                    <IconPara imgsrc={idea} para="Daily Hand Picked Problems & Weekly Contents With Quick Doubbt Solving"/>
                    <IconPara imgsrc={chat} para="Regular 1 : 1 Mentorship Sessions And Mock Interviews"/>
                    <IconPara imgsrc={growth} para="Develop Industry-Relevant Projects Based On Real-World Examples"/>
                </div>
                <img src={pics} width="500px" style={{marginLeft:90}}/>
            </div>
        </div></>)
}