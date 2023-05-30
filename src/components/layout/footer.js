import React from "react";

const footerYear = new Date().getFullYear();
const Footer = () =>
{
    return(
        <footer className="footer p-2 bg-gray-700 text-primary-content footer-center">
            <div>
            All rights reserved {footerYear} to:  <b>Ayush Chandel</b>
            </div>
        </footer>
    )
}
export default Footer;