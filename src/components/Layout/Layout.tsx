import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.main}>
        <div>Header</div>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
