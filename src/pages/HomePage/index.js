import React, { Component } from "react";
import styles from "./home.module.scss";
import Skills from "../../components/Skills/index.js";
import Experience from "../../components/Experience/index.js";
import Education from "../../components/Education/index.js";

const HomePage = props => {
  return (
    <div className={styles.wraps}>
      <section className={styles.brief}>
        <img src={require("../../assets/images/IMG_0264.JPG")}></img>
        <h2>
          <strong>Min-Chen Lu</strong>
        </h2>
        <p>software engineer</p>
        <p>你好！我是⼀位軟體⼯程師，目前任職於台達電子從事IoT相關領域</p>
        <p>
          主要使用Node與Python開發產品相關服務，並致力於持續學習及追求工程師勇於實作解決問題的精神。
        </p>
      </section>
      <section className={styles.work}>
        <Skills />
        <Experience />
        <Education />
      </section>
    </div>
  );
};

export default HomePage;
