import React from "react";
import OtherSkills from "./other-skills/otherSkills";
import CoreSkills from "./core-skills/coreSkills";
import "./skills.css";

const Skills = () => {
  return (
    <div class="ds-skills-section">
      <div class="container">
        <div class="row">
           <OtherSkills/> 
           <CoreSkills/> 
        </div>
      </div>
    </div>
  );
};

export default Skills;
