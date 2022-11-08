import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Services from "../../pages/Services/Services";
import ServicesDetails from "../../pages/ServicesDetails/ServicesDetails";
import Signup from "../../pages/Signup/Signup";
import Main from "../../shared/Outlet/Main";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        { path: '/', element: <Home />, loader: () => fetch(`http://localhost:5000/service`)},
        { path: '/services', element: <Services />, loader: () => fetch(`http://localhost:5000/services`)},
        { path: '/services/:id', element: <ServicesDetails />, loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)},
        {path: '/login', element: <Login/>},
        {path: '/Signup', element: <Signup/>},
    ]}
])