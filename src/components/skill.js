import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <Grid>
          <Cell col={4}>
            <div>
              <h4>{this.props.skillName}</h4>
            </div>
          </Cell>
          <Cell col={8} style={{ paddingTop: "35px" }}>
            <div>
              <ProgressBar progress={this.props.skillValue} />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Skill;
