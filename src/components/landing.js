import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import data from './data';

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={data.person.img}
              alt="avatar"
              className="landing-avatar"
            />
            <div className="landing-border">
              <h2>React Developer</h2>
              <hr />
              <h4>HTML/CSS | JavaScript | React | SAP</h4>
              <div className="landing-social-links">
                <a
                  href="https://www.linkedin.com/in/stojan-gjeorgiov-73a88764"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
