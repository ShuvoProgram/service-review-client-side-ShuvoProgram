import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Main from "../../shared/Outlet/Main";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {path: '/', element:<Home/>},
        {path: '/login', element: <Login/>},
        {path: '/Signup', element: <Signup/>}
    ]}
])