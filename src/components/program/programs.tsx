import { Card } from "./card";
import students from "../../images/Rectangle7.png";
import work from "../../images/Rectangle7(1).png";


export const Programs = () => {
    return(
            <div className="programs-container">
        <div className="programs-heading">
        <h1>Our Programs</h1>
        <p>Ace Your Skills In Problem Solving In DSA, System Design And Developement</p>
        </div>
    <Card imgsrc={students} heading="For College Students" para="Who want to rocket-start their career and get placed in thier dream companies"/>
    <Card imgsrc={work} heading="For Working Professionals" para="Who wish to shift to top product based companies and ace thier tech careers"/>
    </div>
    )
}