import { Outlet, Link } from "react-router-dom";
import Header from "./header/header";
import SideMenu from "./side-menu/sidemenu";

export default function App() {
  return (
    <div>
      <SideMenu></SideMenu>
      <Header></Header>
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet /> */}


    </div>
  );
}
