import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import memories from './images/memories.png';

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="foot">
        <div>
          <a onClick={handleClick}>
            <div className="footer__backToTop">
          <ExpandLessIcon className="footer__backToTopText" />
            </div>
          </a>
        </div>
    <div className="footer">
      
{/* 
      <div className="footer__verticalRow">
        <div className="footer__verticalCol">
          <p>Terms of use</p>
        </div>
        <div className="footer__verticalCol">
        <p>Get to Know Us</p>
        </div>
        <div className="footer__verticalCol">
        <p>Make Money with Us</p>
        </div>
        <div className="footer__verticalCol">
        <p>Cookie Policy</p>
        </div>
      </div>

      <hr /> */}

      <div className="footer__line">
        <img
          className="footer__lineLogo"
          src={memories}
          alt=""
        />
        <span className="footer__lineMessage">
          MERN Project developed by &copy;{" "}
          <a href="https://github.com/rahul-k-tiwari" target="_blank">
            Rahul Kumar Tiwari
          </a>
        </span>
      </div>
    </div>
    </div>
  );
}

export default Footer;