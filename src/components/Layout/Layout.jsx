import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout({isAuth, setIsAuth}) {
  return (
    <>
      <Header isAuth = {isAuth} setIsAuth = {setIsAuth}/>
      <Outlet />
    </>
  );
}