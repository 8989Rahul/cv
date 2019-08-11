import React, { Component } from "react";
import "../css/components/Main.css";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <table cellSpacing="10">
          <tr>
            <td>
              <img
                className="profile-pic"
                src={require("../img/ved.jpg")}
                alt="Rahul's Profile pic"
              />
            </td>
            <td>
              <h1>Rahul Daghale</h1>
              <p>
                Founder and CTO of <strong>Rahul's Personal Site</strong>
              </p>
              <p>I am an Web Developer.I love parle-g with tea.</p>
            </td>
          </tr>
        </table>

        <hr />
        <h3>Work Experience</h3>
        <table cellSpacing="10">
          <tr>
            <th>years</th>
            <th>Work</th>
          </tr>
          <tr>
            <td>2018</td>
            <td>Lead Developer at My Home</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>Intern at VRLab,Pune</td>
          </tr>
        </table>
        <hr />

        <h3>Skills</h3>

        <table cellSpacing="10">
          <tr>
            <td>
              <table>
                <tr>
                  <td>Web Developement</td>
                  <td>★★</td>
                </tr>

                <tr>
                  <td>Playing Games</td>
                  <td>★★★</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <hr />

        <h3>My Hobbies</h3>
        <ol>
          <li>Bike Riding</li>
          <li>Waching Movies</li>
          <li>Learning New Things</li>
        </ol>
        <hr />
        <Link to="/contact">Contact Me</Link>
        {/* <a href=""></a> */}
      </div>
    );
  }
}

export default Main;
