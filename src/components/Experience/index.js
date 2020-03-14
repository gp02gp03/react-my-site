import React, { Component } from "react";
import styles from "./ex.module.scss";
import stylesBulma from "../css/css/bulma.min.css";

const Experience = () => {
  return (
    <div className={styles.ex}>
      <br />
      {/**Delta */}
      <article class="message is-link">
        <div class="message-header">
          <p>Experience</p>
        </div>
        <div class="message-body">
          <div class="columns">
            <div class="column is-three-quarters">
              <div media-left>
                <div class="content">
                  <h5>資深軟體工程師 / 台達電子</h5>
                  <br />
                  <div class="columns"></div>
                </div>
              </div>
            </div>
            <div class="column">
              <h6>2018.05 - Present</h6>
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <h4>樓宇自動化應用產品開發及雲端服務整合</h4>
            </div>
            <div class="column">
              <ol>
                <li>1. 終端感測器資料蒐集、擷取與雲端平台串接</li>
                <li>2. 實現物聯網之通訊協定及雲端智能控制</li>
                <li>3. 官網及Dashboard前端網頁開發及維護</li>
                <li>4. IoT 整合性管理平台網路爬蟲及資料視覺化</li>
                <li>5. 即時數據資料呈現及監測</li>
                <br />
                <li>
                  技術 :
                  Python、Node.js、Express.js、React.js、Redux、Vue.js、Vuex、Docker、MQTT、OPCUA
                </li>
              </ol>
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <h4>電動車充放電系統整合開發</h4>
            </div>
            <div class="column">
              <ol>
                <li>1. 軟硬體測試軟體工具開發</li>
                <li>2. 充放電系統資料驗證及剖析</li>
                <li>3. 充放電系統資料與雲端介接</li>
                <br />
                <li>技術 : Node.js、C#、Modbus TCP</li>
              </ol>
            </div>
          </div>
          <hr />
          <br />
          {/**cathay */}
          <div class="columns">
            <div class="column is-three-quarters">
              <div media-left>
                <div class="content">
                  <h5>軟體工程師(系統分析師) / 國泰世華銀行</h5> <br />
                  <div class="columns"></div>
                </div>
              </div>
            </div>
            <div class="column">
              <h6>2015.03 - 2018.05</h6>
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <h4>國泰集團電子簽核系統開發與維護</h4>
            </div>
            <div class="column">
              <ol>
                <li>1. 跨公司、跨系統資料整合及流程整合開發</li>
                <li>2. 自動化交換電子簽核功能開發</li>
                <li>3. 會計系統、採購平台整合及串接</li>
                <li>4. 批次資料交換程式開發</li>
                <li>5. 多語系網站功能開發</li>
                <li>6. 簽核格式樣板開發及word/pdf產出</li>
              </ol>
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <h4>電腦聯繫單系統開發與維護</h4>
            </div>
            <div class="column">
              <ol>
                <li>1. 報表功能開發</li>
                <li>2. 與IBM合作開發結合程式上線流程</li>
              </ol>
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <h4>NH2020系統開發及維護</h4>
            </div>
            <div class="column">
              <ol>
                <li>1. 留言板功能開發</li>
                <li>2. 線上投票功能維護</li>
              </ol>
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <h4>客訴通報系統建置 (SA)</h4>
            </div>
            <div class="column">
              <ol>
                <li>1. 設計系統資料庫規格及規劃流程模組功能</li>
                <li>2. 系統規格書撰寫</li>
                <br />
                <li>
                  技術 : ASP.NET Webform、windows form、T-SQL、Stored
                  Procedure、ASP.NET MVC 5
                </li>
              </ol>
            </div>
          </div>
          <hr />
          <br />
          <div class="columns">
            <div class="column is-three-quarters">
              <div media-left>
                <div class="content">
                  <h5>
                    <b>ERP工程師 / 南港輪胎</b>
                  </h5>{" "}
                  <br />
                  <div class="columns"></div>
                </div>
              </div>
            </div>
            <div class="column">
              <h6>2013.12 - 2015.03</h6>
            </div>
          </div>
          <div class="columns">
            <div class="column is-one-third">
              <h4>ERP製造系統開發</h4>
            </div>
            <div class="column">
              <ol>
                <li>1. 產線操作介面開發</li>
                <li>2. DB Schema 設計</li>
                <li>3. 開發系統報表協助控管生產作業</li>
                <li>4. 條碼功能導入，進行庫存出入庫管理</li>
                <br />
                <li>技術 : Progress-4GL、Java、JavaScript</li>
              </ol>
            </div>
          </div>
        </div>
      </article>

      {/* <div>
        <div className={styles.delta}>
          <div className={styles.left}>
            <h1>Experience</h1>
          </div>
          <div className={styles.center}>
            <h1>資深軟體工程師 / 台達電子</h1>
            <h2> 樓宇自動化應用產品開發及雲端服務整合 </h2>
            <h3>
              <ul>
                <li>1. 終端感測器資料蒐集、擷取與雲端平台串接</li>
                <li>2. 實現物聯網之通訊協定及雲端智能控制</li>
                <li>3. 官網及Dashboard前端網頁開發及維護</li>
                <li>4. IoT 整合性管理平台網路爬蟲及資料視覺化</li>
                <li>5. 即時數據資料呈現及監測</li>
                <br />
                <li> 技術:Python、Node.js、Express.js、React.js、</li>
                <li>Redux、Vue.js、Vuex、Docker、MQTT、OPCUA</li>
              </ul>
            </h3>
          </div>
          <div className={styles.right}> 2018.05 - Present </div>

          <div className={styles.center}>
            <h2> 電動車充放電系統整合開發 </h2>
            <h3>
              <ul>
                <li>1. 軟硬體測試軟體工具開發</li>
                <li>2. 充放電系統資料驗證及剖析</li>
                <li>3. 充放電系統資料與雲端介接</li>
                <br />
                <li> 技術 : Node.js、C#、Modbus TCP</li>
              </ul>
            </h3>
          </div>
        </div>

        <br />

        <div className={styles.cathay}>
          <div>
            <div className={styles.left}>
              <h1></h1>
            </div>
            <div className={styles.center}>
              <h1>軟體工程師(系統分析師) / 國泰世華銀行</h1>
              <h2>國泰集團電子簽核系統開發與維護</h2>
              <h3>
                <ul>
                  <li>1. 跨公司、跨系統資料整合及流程整合開發</li>
                  <li>2. 自動化交換電子簽核功能開發</li>
                  <li>3. 會計系統、採購平台整合及串接</li>
                  <li>4. 批次資料交換程式開發</li>
                  <li>5. 多語系網站功能開發</li>
                  <li>6. 簽核格式樣板開發及word/pdf產出</li>
                </ul>
              </h3>
              <h2>電腦聯繫單系統開發與維護</h2>
              <h3>
                <ul>
                  <li>1. 報表功能開發</li>
                  <li>2. 與IBM合作開發結合程式上線流程</li>
                </ul>
              </h3>
              <h2>NH2020系統開發及維護</h2>
              <h3>
                <ul>
                  <li>1. 留言板功能開發</li>
                  <li>2. 線上投票功能維護</li>
                </ul>
              </h3>
              <h2>客訴通報系統建置 (SA)</h2>
              <h3>
                <ul>
                  <li>1. 設計系統資料庫規格及規劃流程模組功能</li>
                  <li>2. 系統規格書撰寫</li>
                </ul>
              </h3>
            </div>
            <div className={styles.right}> 2015.03 - 2018.05 </div>
          </div>
        </div>

        <br />

        <div>
          <div className={styles.left}>
            <h1></h1>
          </div>
          <div className={styles.center}>
            <h1>ERP工程師 / 南港輪胎</h1>
          </div>
          <div className={styles.right}> 2013.12 - 2015.03 </div>
        </div>*/}

      {/*<div>
          <div className={styles.left}>
            <h1>Experience</h1>
          </div>
        </div>
        <h2> 樓宇自動化應用產品開發及雲端服務整合 </h2>

        <div className={styles.center}>
          <ul>
            <li>1. 終端感測器資料蒐集、擷取與雲端平台串接</li>
            <li>2. 實現物聯網之通訊協定及雲端智能控制</li>
            <li>3. 官網及Dashboard前端網頁開發及維護</li>
            <li>4. IoT 整合性管理平台網路爬蟲及資料視覺化</li>
            <li>5. 即時數據資料呈現及監測</li>
            <br />
            <li> 技術:Python、Node.js、Express.js、React.js、</li>
            <li>Redux、Vue.js、Vuex、Docker、MQTT、OPCUA</li>
          </ul>
        </div>

        <br />

        <div>
          <h2> 電動車充放電系統整合開發 </h2>
        </div>

        <div>
          <ul>
            <li>1. 軟硬體測試軟體工具開發</li>
            <li>2. 充放電系統資料驗證及剖析</li>
            <li>3. 充放電系統資料與雲端介接</li>
          </ul>
        </div>

        <div>
          <div className={styles.left}>
            <h1></h1>
          </div>
          <div className={styles.center}>
            <h1>軟體工程師(系統分析師) / 國泰世華銀行</h1>
          </div>
          <span> 2015.03 - 2018.05 </span>
        </div>*/}

      {/*<div>
        <h2>樓宇自動化應用產品開發及雲端服務整合</h2>
        <ul>
          <li>終端感測器資料蒐集、擷取與雲端平台串接</li>
          <li>實現物聯網之通訊協定及雲端智能控制</li>
          <li>官網及Dashboard前端網頁開發及維護</li>
          <li>IoT 整合性管理平台網路爬蟲及資料視覺化</li>
          <li>即時數據資料呈現及監測</li>
        </ul>
        <p>
          技術:Python、Node.js、Express.js、React.js、Redux、Vue.js、Vuex、Docker、MQTT、OPCUA
        </p>

        <br />
        <br />
        <h2>電動車充放電系統整合開發</h2>
        <ul>
          <li>1. 軟硬體測試軟體工具開發</li>
          <li>2. 充放電系統資料驗證及剖析</li>
          <li>3. 充放電系統資料與雲端介接</li>
        </ul>

        <p>技術 : Node.js、C#、Modbus TCP</p>
        </div>  */}

      {/*
      <div>
        <h1>軟體工程師(系統分析師) - 國泰世華銀行, 2015.03 - 2018.05</h1>
        <h2>國泰集團電子簽核系統開發與維護</h2>
        <ul>
          <li>1. 跨公司、跨系統資料整合及流程整合開發</li>
          <li>2. 自動化交換電子簽核功能開發</li>
          <li>3. 會計系統、採購平台整合及串接</li>
          <li>4. 批次資料交換程式開發</li>
          <li>5. 多語系網站功能開發</li>
          <li>6. 簽核格式樣板開發及word/pdf產出</li>
        </ul>

        <br />
        <br />
        <h2>電腦聯繫單系統開發與維護</h2>
        <ul>
          <li>1. 報表功能開發</li>
          <li>2. 與IBM合作開發結合程式上線流程</li>
        </ul>

        <br />
        <br />
        <h2>NH2020系統開發及維護</h2>
        <ul>
          <li>1. 留言板功能開發</li>
          <li>2. 線上投票功能維護</li>
        </ul>

        <br />
        <br />
        <h2>客訴通報系統建置 (SA)</h2>
        <ul>
          <li>1. 設計系統資料庫規格及規劃流程模組功能</li>
          <li>2. 系統規格書撰寫</li>
        </ul>
        <p>
          技術 : ASP.NET Webform、windows form、T-SQL、Stored Procedure、ASP.NET
          MVC 5
        </p>
      </div>

      <div>
        <h1>ERP工程師 - 南港輪胎, 2013.12 - 2015.03</h1>
        <h2>ERP製造系統開發</h2>
        <ul>
          <li>1. 產線操作介面開發</li>
          <li>2. DB Schema 設計</li>
          <li>3. 開發系統報表協助控管生產作業</li>
          <li>4. 條碼功能導入，進行庫存出入庫管理</li>
        </ul>

        <br />
        <br />
        <h2>電子表單(work flow)開發與維護</h2>
        <ul>
          <li>1. 電子表單設計</li>
          <li>2. 流程開發，系統功能調整及流程優化</li>
        </ul>
      </div>       */}
    </div>
  );
};

export default Experience;
