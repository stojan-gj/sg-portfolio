import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import JobDesc from "./jobDesc";

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <Grid>
          <Cell col={4}>
            <div>
              <h4>
                {this.props.startYear} - {this.props.endYear}
              </h4>
            </div>
          </Cell>
          <Cell col={8}>
            <div>
              <h4>{this.props.workPlace}</h4>
              <h4>{this.props.workPosition}</h4>
              <JobDesc key={this.props.id} jobDesc={this.props.jobDesc} />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Experience;
