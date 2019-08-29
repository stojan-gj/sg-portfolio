import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import data from "./data";

class Contact extends Component {
  render() {
    return (
      <div className="contact-grid">
        <Grid>
          <Cell col={6}>
            <h2>
              {data.person.fName} {data.person.lName}
            </h2>
            <img src={data.person.img} alt="avatar" />
            <h4>{data.person.contactDesc}</h4>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontFamily: "Shadows Into Light, cursive",
                      fontSize: "27px",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-address-card" />
                    {data.person.address}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontFamily: "Shadows Into Light, cursive",
                      fontSize: "27px",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-phone-square" />
                    {data.person.phone}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontFamily: "Shadows Into Light, cursive",
                      fontSize: "27px",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-envelope" />
                    {data.person.email}
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontFamily: "Shadows Into Light, cursive",
                      fontSize: "27px",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    <a
                      href={data.person.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin-square" />
                    </a>
                    {data.person.fName} {data.person.lName}
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
