
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Navbar = () => {
    return (
            <div className="navWrapper">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark" data-bs-theme = "dark" >
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            School-Logo
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggel navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className =  {({isActive}) => `nav-link ${isActive ? "active" : "" }`}
                                        exact = "true"
                                    >
                                        DashBoard
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/RegisterStudent"
                                        className = {({isActive}) => `nav-link ${isActive ? "active" : ""}`} >
                                            RegisterStudent
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/StudentList"
                                        className = {({isActive}) => `nav-link ${isActive ? "active" : ""}`} >
                                            StudentList
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/ProgramList"
                                        className= {({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                                            ProgramList
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/PublishEvent"
                                        className = {({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                                            PublishEvent
                                    </NavLink>
                                </li>
                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
    );
};

export default Navbar;