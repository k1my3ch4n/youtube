import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>SideBar</div>
      <div>
        <div>Header</div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
