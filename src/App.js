import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import data from "./components/data";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="app-header"
          title={
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              {data.person.fName + " " + data.person.lName}
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={
            <Link style={{ color: "black", textDecoration: "none" }} to="/">
              {data.person.fName + " " + data.person.lName}
            </Link>
          }
        >
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
