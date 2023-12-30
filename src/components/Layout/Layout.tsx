import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <div>Header</div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
