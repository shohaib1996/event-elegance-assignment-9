import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out successfully')
            })
            .catch(error => {
                console.error(error);
            })
    }
    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-fuchsia-600 text-white p-2  rounded-md" : ""
                }
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/cart"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-fuchsia-600 text-white p-2 rounded-md" : ""
                }
            >
                Cart
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-fuchsia-600 text-white p-2 rounded-md" : ""
                }
            >
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-fuchsia-600 text-white p-2 rounded-md" : ""
                }
            >
                About
            </NavLink>
        </li>

    </>
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="w-28 h-14 normal-case text-xl font-bold"><img src="/images/eventLogo.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 space-x-5">
                        {links}
                    </ul>
                </div>
                {
                    user ? 
                    <div className="navbar-end space-x-3">
                        <p className="font-bold">{user.displayName || user.email}</p>
                        <img className="w-12 h-12 rounded-full hidden lg:flex" src={user.photoURL} alt="" />
                        <button onClick={handleLogOut} className="btn font-bold text-white bg-fuchsia-600">Log Out</button>
                    </div> : 
                    <div className="navbar-end">
                        <Link to="/login">
                        <button className="btn font-bold text-white bg-fuchsia-600">Login</button>
                        </Link>
                    </div>
                }



            </div>
        </div>
    );
};

export default Navbar;