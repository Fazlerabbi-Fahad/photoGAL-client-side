import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Services from "../../Pages/Services/Services/Services";
import AddServices from "../../Pages/Addservices/AddServices";
import MyReviews from "../../Pages/My Reviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ServiceDetails from "../../Pages/Services/ServiceDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services/')
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
]);

export default routes;