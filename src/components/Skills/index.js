import React, { Component } from "react";
import styles from "./skill.module.scss";

const Skills = () => {
  return (
    <React.Fragment>
      <div id="skills" className={styles.skill}>
        <article class="message is-dark">
          <div class="message-header">
            <p>Skills</p>
          </div>
          <br />
          <div class="columns is-desktop">
            <div class="column">
              <strong>Front-End</strong>
              <br />
              <hr />
              <ul>
                <li>JavaScript </li>
                <li>Vue.js/vuex</li>
                <li>React.js/redux</li>
              </ul>
            </div>

            <div class="column">
              <strong>Back-End</strong>
              <br />
              <hr />
              <ul>
                <li>Node.js (Express / socket.io) </li>
                <li>C# (ASP.NET Webform/Windows form/MVC 5)</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div class="column">
              <strong>Database</strong>
              <br />
              <hr />
              <ul>
                <li>MS-SQL</li>
                <li>Redis</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div class="column">
              <strong>Others </strong>
              <br />
              <hr />
              <ul>
                <li>Git</li>
                <li>AWS EC2</li>
                <li>Docker</li>
                <li>Drone CI/CD</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </React.Fragment>
  );
};

export default Skills;
