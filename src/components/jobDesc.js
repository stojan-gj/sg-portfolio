import React, { Component } from "react";
import { List, ListItem, ListItemContent } from "react-mdl";

class JobDesc extends Component {
  toggleJobDesc() {
    const jobDescComp = this.props.jobDesc.map(t => (
      <ListItem key={t.id}
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
      >
        <ListItemContent
          icon="radio_button_unchecked"
          style={{
            fontFamily: "Shadows Into Light, cursive",
            fontSize: "20px",
            color: "white",
            textAlign: "left"
          }}
        >
          {t.jobText}
        </ListItemContent>
      </ListItem>
    ));
    return <div>{jobDescComp}</div>;
  }

  render() {
    return (
      <div>
        <List key={this.props.key} style={{ paddingTop: "0px" }}>
          {this.toggleJobDesc()}
        </List>
      </div>
    );
  }
}

export default JobDesc;
