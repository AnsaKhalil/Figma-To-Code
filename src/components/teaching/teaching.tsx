import support from "../../images/Screenshot(25)1.png";
import career from "../../images/Screenshot(26)1.png";
import placement from "../../images/Screenshot(28)1.png";
import mock from "../../images/Screenshot(29)1.png";
import { CourseCard } from "./courseCard";

export const Teaching = () => {
    return(<><div className="teaching-container">
        <div className="programs-heading">
        <h1>Placement And Career Support</h1>
        <p>Helping students get exposed to a world opportunitities</p>
        </div>
        <div className="teaching-cards">
        <CourseCard 
        imgsrc={career} 
        heading="Career Portfolio Optimization" 
        para="Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies"/>
        <CourseCard 
        imgsrc={support} 
        heading="Extensive Support by Alumni-Mentor Network" 
        para="Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies"/>
        <CourseCard 
        imgsrc={placement} 
        heading="Placement Opportunities" 
        para="Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies"/>
        <CourseCard 
        imgsrc={mock} 
        heading="Mock Interviews" 
        para="Referrals and Career Tips by 400+ Alumni and Mentors from top product-based companies"/>
        </div>
        <button className="teaching-btn">Know More</button>
        </div></>)
}