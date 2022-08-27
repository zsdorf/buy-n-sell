import React from "react";
import "./Footer.css";

function Footer() {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <button onClick={scroll}>Back to top</button>

      <div className="footer__container">
        <div className="footer__stuff">
          <div className="footer__one">
            <div className="footer__title">
            </div>
            <div className="footer__text">
            </div>
          </div>

          <div className="footer__two">
            <div className="footer__title">
            </div>
            <div className="footer__text">
            </div>
          </div>

          <div className="footer__three">
            <div className="footer__title">
            <h3>| ©️ Buy 'n' Sell | 2022 | All Rights Reserved |  <a href="https://github.com/zsdorf/buy-n-sell">View Code</a> | </h3>
            </div>
            <div className="footer__text">
            </div>
          </div>

          <div className="footer__four">
            <div className="footer__title">
            </div>
            <div className="footer__text">
              
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;