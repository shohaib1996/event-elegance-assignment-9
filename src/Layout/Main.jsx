import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;