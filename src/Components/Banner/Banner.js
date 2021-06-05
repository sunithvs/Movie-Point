import React from "react";

import "./Banner.css";

function Banner() {
  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to<br/> Movie point </h1>
        <h3>
          Get updated with Movie Point 
        </h3>
       <div className="bur"> <button className="signin-btn">Let's chill</button></div>
      
      </div>
      <div className="cover">
        <div className="gradient"></div>
      </div>
    </div>
  );
}

export default Banner;
