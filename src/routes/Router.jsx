import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/Home";
import Learning from "../components/Learning";
import About from "../components/About";
import Profile from "../components/Profile";
import Tutorial from "../components/Tutorial";
import Lesson from "../components/Lesson";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import ForgotPassword from "../components/ForgotPassword";
import NotFound from "../NotFound";
import UpdateProfile from "../components/UpdateProfile";

const Router=createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/learning",
                element:<Learning></Learning>,
                loader:()=>fetch("/lesson.json")
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/profile",
                element:<PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path:"/update",
                element:<PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path:"/tutorials",
                element:<PrivateRoute>
                    <Tutorial></Tutorial>
                </PrivateRoute>
            }
            ,
            {
                path:"/lesson/:lesson_no",
                element:<PrivateRoute>
                    <Lesson></Lesson>
                </PrivateRoute>,
                loader:async({params})=>{
                    const res=await fetch("/language.json")
                    const data=await res.json()
                    const singleData=data.filter(d=>d.lesson_no==params.lesson_no)
                    
                    return singleData
                }
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register> 
            },
            {
                path:"/forgot-password",
                element:<ForgotPassword></ForgotPassword>
            }
        ]
    }
    ,
    {
        path:"*",
        element:<NotFound></NotFound>

    }
   
]);
export default Router;