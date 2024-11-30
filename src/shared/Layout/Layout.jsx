import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
