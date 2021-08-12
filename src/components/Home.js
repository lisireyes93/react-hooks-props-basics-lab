import React from "react";



function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.userstuff.color }}>
        {props.userstuff.name} is a Web Developer from {props.userstuff.city}
      </h1>
    </div>
  );
}

export default Home;
