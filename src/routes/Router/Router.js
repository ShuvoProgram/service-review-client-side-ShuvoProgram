import { createBrowserRouter } from "react-router-dom";
import AddService from "../../pages/AddService/AddService";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyReview from "../../pages/MyReview/MyReview";
import Services from "../../pages/Services/Services";
import ServicesDetails from "../../pages/ServicesDetails/ServicesDetails";
import Signup from "../../pages/Signup/Signup";
import Main from "../../shared/Outlet/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        { path: '/', element: <Home />, loader: () => fetch(`http://localhost:5000/service`)},
        { path: '/services', element: <Services />, loader: () => fetch(`http://localhost:5000/services`)},
        { path: '/services/:id', element: <ServicesDetails />, loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)},
        {path: '/login', element: <Login/>},
        {path: '/Signup', element: <Signup/>},
        { path: '/myreview', element: <PrivateRouter><MyReview/></PrivateRouter>},
        { path: '/addservice', element: <PrivateRouter><AddService/></PrivateRouter>}
    ]}
])