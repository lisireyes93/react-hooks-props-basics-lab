import React from "react";
import Links from "./Links";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.userstuff.bio ? props.userstuff.bio : " " }</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* {props.userstuff.links.github} */}
      <Links userstuff={props.userstuff} />
    </div>
  );
}



export default About;
