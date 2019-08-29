import React, { Component } from "react";
import Project from "./project";
import { Grid, Cell } from "react-mdl";
import data from "./data";

class Projects extends Component {
  toggleProjects() {
    const projectComp = data.projects.map(p => (
      <Project
        key={p.projectId}
        projectName={p.projectName}
        projectUrl={p.projectUrl}
        projectImg={p.projectImg}
      />
    ));

    return <div className="project-grid">{projectComp}</div>;
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}> {this.toggleProjects()} </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
