import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <div className="education">
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
              <h4>{this.props.schoolName}</h4>
              <p>{this.props.degree}</p>
              <p
                style={{
                  fontFamily: "Shadows Into Light, cursive",
                  fontSize: "20px",
                  color: "white",
                  fontWeight:"normal"
                }}
              >
                {this.props.majorSubjects}
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Education;
