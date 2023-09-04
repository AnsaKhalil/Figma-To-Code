import mac from "../images/mac.png";

export const About = () => {
    return (<>
    <div className="about">
        <div className="side-to-side">
            <div className="texts">
                <h1 className="big-text">Grab your <span className="dream">Dream</span> tech offer today</h1>
                <ul className="small-text">
                    <li className="small-texts">A highly structured, personalized and guided word-class program</li>
                    <li className="small-texts">Designed by industry experts</li>
                    <li className="small-texts">That will make you the best software developer out there</li>
                    <li className="small-texts">For ambition learners, who don’t want to settle for anything less in their tech careers</li>
                    </ul>
                    <button className="apply">Apply Now</button>
            </div>
            <div className="circle-mac">
                <div className="circle"></div>
                <img className="mac" src={mac}/>
                </div>
            </div>
            </div></>)
}