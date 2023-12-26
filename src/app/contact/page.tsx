import React from "react";
import "./page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contact = () => {
  return (
    <div>
      <section className="footer_get_touch_outer">
        <div className="container">
          <div className="footer_get_touch_inner grid-70-30">
            <div className="colmun-70 get_form">
              <div className="get_form_inner">
                <div className="get_form_inner_text">
                  <h3>Get In Touch</h3>
                </div>
                <form action="#">
                  <div className="grid-50-50">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone/Skype" />
                  </div>
                  <div className="grid-full">
                    <textarea placeholder="About Your Project"></textarea>
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className="colmun-30 get_say_form">
              <h5>Say Hi!</h5>
              <ul className="get_say_info_sec">
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:">info@stackfindover.com</a>
                </li>
                <li>
                  <i className="fa fa-github"></i>
                  <a href="https://github.com/prrockzed">Github</a>
                </li>
                <li>
                  <i className="fa fa-twitter"></i>
                  <a href="https://twitter.com/prrockzed">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
