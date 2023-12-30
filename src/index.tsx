import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";

import styles from "./global.module.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div className={styles.wrapper}>
      <App />
    </div>
  </React.StrictMode>
);
