import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="page-footer font-small elegant-color-dark fixed-bottom">
      <div className="footer-copyright text-center p-3">
        {/* attributes to flaticons */}
        <a href="https://www.flaticon.com/free-icons/user" title="user icons">
          <p className="footer">User icon created by Freepik - Flaticon</p>
        </a>{" "}
        <br />
      </div>
    </footer>
  );
}

export default Footer;
