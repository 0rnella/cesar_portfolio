import React from "react";

function About(props) {
  return (
    <div className="row">
      <div className="col s12 m4 l4">
        <img src={props.images.aboutMe} alt="Cesar Cabezas" style={{ width: "94%", padding: "3%" }} />
      </div>
      <div className="col s12 m8 l8 left-align">
        <h3>About me</h3>
        <p>
          I am a PhD candidate in philosophy and a Core Curriculum Preceptor at Columbia University.
        </p>
        <p>
          My research lies at the intersection of philosophy of race, social philosophy, and the social sciences.
        </p>
        <p>
          My current project draws on these fields to develop an interdisciplinary framework for explaining the resilience of social structures of racial oppression. 
          I am especially interested in explaining what leads agents who self-identify as non-racist to lend their support (active or passive) to practices, policies and institutions that reinforce racial inequality.
        </p>
      </div>
    </div>
  );
}

export default About;
