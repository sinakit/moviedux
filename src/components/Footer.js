import React from "react"
import '../styles.css';
 const  Footer=()=> {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-text">
                © {currentYear} Moviedex ,All Rights Reserved.
            </p>
        </footer>
    );
}
export default Footer;