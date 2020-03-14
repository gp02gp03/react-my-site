import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { Link, Route, withRouter } from "react-router-dom";

import HomePage from "./HomePage/index.js";
{
  /* import WorksPage from "./WorkPage/index.js";
import WorkPageDetail from "./WorkPageDetail/index.js";*/
}

class App extends Component {
  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <div className={styles.App}>
        <headers className={styles.header}>
          <div className={styles.box}>
            <Link to="/">
              <div className={styles.boxleft}>Min Chen Lu</div>
            </Link>
            <div className={styles.boxright}>
              <Link to="/">
                <p
                  className={location.pathname === "/" ? styles.selected : null}
                >
                  ABOUT
                </p>
              </Link>
              {/**
                <Link to="/works">
                <p
                  className={
                    location.pathname === "/works" ? styles.selected : null
                  }
                >
                  WORKS
                </p>
              </Link>
              **/}
            </div>
          </div>
        </headers>

        <section className={styles.content}>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={HomePage} />
          {/*<Route path="/works" exact component={WorksPage} />
                <Route path="/works/:id" exact component={WorkPageDetail} />*/}
        </section>

        <footer className={styles.footer}>
          <p>
            @<b>2020</b>
          </p>
          <p>Handmade with</p>
          <p> Min-Chen Lu </p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
