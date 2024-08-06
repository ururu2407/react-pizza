import React from "react";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Page not found
      </h1>
      <p className={styles.description}>
        We are sorry, but the page you were looking for doesn't exist
      </p>
    </div>
  );
};
