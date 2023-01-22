import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer id="footer">
          <div className="foot-div">
            <div className="foot-content">
              <div className="foot-head">Tata MarketPlace</div>
              <div className="foot-topic">About Us</div>
              <div className="foot-topic">Careers</div>
              <div className="foot-topic">Sell With Us</div>
              <div className="foot-topic">Terms of Use</div>
              <div className="foot-topic">Privacy Policy</div>
              <div className="foot-topic">Affiliates</div>
              <div className="foot-topic">Sitemap</div>
            </div>
            <div className="foot-content">
              <div className="foot-head">Customer Service</div>
              <div className="foot-topic">Shopping</div>
              <div className="foot-topic">Offers & Promotions</div>
              <div className="foot-topic">Payments</div>
              <div className="foot-topic">Cancellation</div>
              <div className="foot-topic">Returns & Refunds</div>
              <div className="foot-topic">CliQ And PiQ</div>
              <div className="foot-topic">Return To Store</div>
              <div className="foot-topic">Electronics Return Policy</div>
              <div className="foot-topic">Contact Us</div>
              <div className="foot-topic">Reviews Guidelines</div>
              <div className="foot-topic">Furniture Return Policy</div>
            </div>
            <div className="foot-content">
              <div className="foot-head">My Tata CLiQ</div>
              <div className="foot-topic">My Account</div>
              <div className="foot-topic">My Orders</div>
              <div className="foot-topic">My Shopping Bag</div>
              <div className="foot-topic">My Wishlist</div>
            </div>
          </div>
          <div className="links">
            <div className="download-links">
              <span>Download App</span>
              <span>
                <i className="fa-brands fa-android"></i>
              </span>
              <span>
                <i className="fa-brands fa-apple"></i>
              </span>
            </div>
            <div className="social-links">
              <span>
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa-brands fa-square-twitter"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </span>
              <span>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </span>
            </div>
            <span className="copyright">
              &copy; 2022 Tata CLiQ | All rights reserved
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
