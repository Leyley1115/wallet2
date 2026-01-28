import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PrivatRoutPage from "./pages/PrivatRout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { useState } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout/Layout";
import AnalysisPage from "./pages/AnalysisPage";
import ExpForm from "./components/ExpForm/ExpForm";
import GridTable from "./components/GridTable/GridTable";
import BarChart from "./components/BarChart/BarChart";

export function AppRoutes(){
    const [isAuth, setIsAuth] = useState(() => { 
        return Boolean(localStorage.getItem("token")); 
    });

    return (
        <Routes>
            <Route element ={<Layout isAuth = {isAuth} setIsAuth = {setIsAuth}/>}>
            <Route element={<PrivatRoutPage isAuth={isAuth}/>}>
				<Route path="/" element={<MainPage /> } >
                    <Route index element = {<><GridTable /><ExpForm /></>} />
                    <Route path="/analysis" element={<><AnalysisPage /><BarChart /></>} />
                </Route>   
			</Route>
            <Route path="/login" element={<SignInPage setIsAuth = {setIsAuth}/>} />
			<Route path="/signup" element={<SignUpPage setIsAuth = {setIsAuth}/>} />
            <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}