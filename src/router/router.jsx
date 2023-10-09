import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import CardDetails from "../components/CardDetails/CardDetails";
import Cart from "../Cart/Cart";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data/data.json')
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/service/:id",
                element: <CardDetails></CardDetails>,
                loader: ()=> fetch('/data/data.json')
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            }
        ]
    }

])

export default router;