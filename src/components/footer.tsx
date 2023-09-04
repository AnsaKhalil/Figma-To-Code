import logo from "../images/logo.png";

export const Footer = () => {
    return(<><div className="footer-container">
        <div className="footer-img-para">
            <img src={logo} width="200px"/>
            <p style={{margin:0}}>Helping Ambitious Learners Upskill Themselves & Shift To Top Product Based Companies</p>
        </div>
        <div className="footer-content">
            <div className="footer-content-1">
                <h4 className="footer-content-heading">About</h4>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Term Of Use</p>
                <p>Refund Policy</p>
                <p>Privacy Policy</p>
            </div>
            <div className="footer-content-1">
                <h4 className="footer-content-heading">Useful Links</h4>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Linkedin</p>
                <p>Telegram</p>
                <p>Youtube</p>
            </div>
        </div>
        </div></>)
}