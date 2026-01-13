import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PrivatRoutPage from "./pages/PrivatRout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";

export function AppRoutes(){
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Routes>
            <Route element ={<Layout isAuth = {isAuth} setIsAuth = {setIsAuth}/>}>
            <Route element={<PrivatRoutPage isAuth={isAuth}/>}>
				<Route path="/" element={<MainPage /> }>
			</Route>
            
			</Route>
            <Route path="/login" element={<SignInPage setIsAuth = {setIsAuth}/>} />
			<Route path="/signup" element={<SignUpPage setIsAuth = {setIsAuth}/>} />
            <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}