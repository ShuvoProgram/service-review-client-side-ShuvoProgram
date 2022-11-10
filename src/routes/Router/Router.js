import { createBrowserRouter } from "react-router-dom";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Edit from "../../pages/MyReview/Edit";
import MyReview from "../../pages/MyReview/MyReview";
import Services from "../../pages/Services/Services";
import ServicesDetails from "../../pages/ServicesDetails/ServicesDetails";
import Signup from "../../pages/Signup/Signup";
import Main from "../../shared/Outlet/Main";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        { path: '/', element: <Home />, loader: () => fetch(`https://server-lake-psi.vercel.app/service`)},
        { path: '/services', element: <Services />, loader: () => fetch(`https://server-lake-psi.vercel.app/services`)},
        { path: '/services/:id', element: <ServicesDetails />, loader: ({ params }) => fetch(`https://server-lake-psi.vercel.app/services/${params.id}`)},
        {path: '/login', element: <Login/>},
        {path: '/Signup', element: <Signup/>},
        { path: '/myreview', element: <PrivateRouter><MyReview/></PrivateRouter>},
        { path: '/addservice', element: <PrivateRouter><AddService/></PrivateRouter>},
        { path: '/edit/:id', element: <PrivateRouter><Edit /></PrivateRouter>, loader: ({ params }) => fetch(`https://server-lake-psi.vercel.app/edit/${params.id}`)},
        {path: '/blog', element: <Blog/>}
    ], errorElement: <Error/>}
])