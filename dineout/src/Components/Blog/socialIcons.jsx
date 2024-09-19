import "./socialIcons.css";

function SocialIcons() {
    return (
        <div className="social-icons-section">
            <div className="social-icons-div" >
                <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="social-icons-div" style={{backgroundColor: "#1da1f2"}}>
                <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="social-icons-div" style={{backgroundColor: "#4dc247"}}>
                <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div className="social-icons-div" style={{backgroundColor: "#179bf4"}}>
                <i className="fa-solid fa-link"></i>
            </div>
        </div>
    )
}

export default SocialIcons;