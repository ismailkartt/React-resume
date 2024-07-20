import React from "react";
import "./banner.css";


const Banner = () => {
  return (
    <div class="ds-banner">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
          <figure>
            <img src="assets/images/profile-image.jpg"/>
          </figure>
        </div>
        <div class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
          <section>
              <h1>
                <span>HI THERE</span>
                I'm Jason Stroff <br/> UI/UX DESIGNER + DEVELOPER based in Florida.
              </h1>
              <ul class="ds-numbervalulist">
                <li>
                  <strong>6+</strong>
                  <span>Experience</span>
                </li>
                <li>
                  <strong>89</strong>
                  <span>Projects</span>
                </li>
                <li>
                  <strong>52</strong>
                  <span>Happy Clients</span>
                </li>
              </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banner;
