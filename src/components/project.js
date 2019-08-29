import React, { Component } from "react";
import { Card, CardText, CardTitle, CardActions, Button } from "react-mdl";

class Project extends Component {
  toggleOnClick() {
    window.open("http://google.com");
  }

  render() {
    return (
      <div>
        <Card shadow={0} style={{ width: "350px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "url(" + this.props.projectImg + ") center / cover"
            }}
          >
            {this.props.projectName}
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button
              colored
              value={this.props.projectUrl}
              onClick={() => {
                window.open(this.props.projectUrl, "_blank");
              }}
            >
              View Demo
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Project;
