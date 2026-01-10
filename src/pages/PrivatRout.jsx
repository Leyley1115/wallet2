import { Navigate, Outlet } from "react-router-dom";

function PrivatRoutPage({isAuth}){
 return isAuth ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivatRoutPage;