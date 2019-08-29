import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skill from "./skill";
import data from "./data";

class Resume extends Component {
  toogleEducation() {
    const EducationComp = data.education.map(e => (
      <Education
        key={e.id}
        startYear={e.startYear}
        endYear={e.endYear}
        schoolName={e.schoolName}
        degree={e.degree}
        majorSubjects={e.majorSubjects}
      />
    ));
    return <div>{EducationComp}</div>;
  }

  toogleExperience() {
    const ExperienceComp = data.experience.map(e => (
      <Experience
        key={e.id}
        startYear={e.startYear}
        endYear={e.endYear}
        workPlace={e.workPlace}
        workPosition={e.workPosition}
        jobDesc={e.jobDesc}
      />
    ));
    return <div>{ExperienceComp}</div>;
  }

  toogleSkills() {
    const SkillComp = data.skills.map(s => (
      <Skill key={s.id} skillName={s.skillName} skillValue={s.skillValue} />
    ));
    return <div>{SkillComp}</div>;
  }

  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={4}>
            <div className="resume-left">
              <img src={data.person.img} alt="avatar" />
              <h2>
                {data.person.fName} {data.person.lName} ({data.person.age})
              </h2>
              <hr />
              <p>{data.person.aboutMe}</p>
            </div>
          </Cell>
          <Cell col={8}>
            <div className="resume-right">
              <h2>Experience</h2>
              {this.toogleExperience()}
              <h2>Education</h2>
              {this.toogleEducation()}
              <h2>Skills</h2>
              {this.toogleSkills()}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
