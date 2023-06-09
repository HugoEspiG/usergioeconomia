import { NavLink } from "react-router-dom";
import React from "react";

export default function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg rounded-bottom">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-brand" >Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Follow</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Sponsors</NavLink>
                            </li>
                        </ul>
                        <span class="nav-item dropdown">
                            <span class="nav-link dropdown-toggle bi bi-person-circle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false"> </span>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><NavLink to={"/login"} className={"dropdown-item"}>Login</NavLink></li>
                                <li><NavLink to={"/register"} className={"dropdown-item"}>Sign up</NavLink></li>
                                <li><hr class="dropdown-divider" /></li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}