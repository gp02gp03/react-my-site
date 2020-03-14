import React, { Component } from "react";
import styles from "./ed.module.scss";

const Education = () => {
  return (
    <div className={styles.ed}>
      <br />
      <article class="message is-info">
        <div class="message-header">
          <p>Education</p>
        </div>
        <div class="message-body">
          <div class="columns">
            <div class="column is-three-quarters">
              <div media-left>
                <div class="content">
                  <h5>資訊與運籌管理所 / 國立臺北科技大學</h5>
                  <div class="columns">
                    <ul>
                      <li>研究領域 : Peer-to-Peer、網路多媒體、網路串流</li>
                    </ul>
                  </div>
                  <div class="columns">
                    <ul>
                      <li>
                        畢業論文 :
                        針對Peer-to-Peer串流設計一個結合多維度超立方體及樹狀的混合架構
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <h6>2010.09 - 2012.07</h6>
            </div>
          </div>
          <br />
          <div class="columns">
            <div class="column is-three-quarters">
              <div media-left>
                <div class="content">
                  <h5>資訊經營學系 / 大同大學</h5>
                  <div class="columns">
                    <ul>
                      <li>
                        畢業專題 :
                        運用頻繁項目集概念之團購代理人程式自動結伴購物模式
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <h6>2006.09 - 2010.06</h6>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Education;
