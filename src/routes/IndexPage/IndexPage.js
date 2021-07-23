import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
import { Button } from "antd";
import { Link } from "dva/router";

// << 頁面呈現 >>
function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">
            Getting Started
          </a>
        </li>
      </ul>
      {/* <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button> */}
      <Button type="primary">
        <Link to="/products">到產品頁</Link>
      </Button>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
