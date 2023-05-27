import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const token = sessionStorage.getItem("token") || "";
    const location = useLocation();
    console.log("PrivateRoteLocation", location);
    if (!token) {
        return <Navigate to={"/login"} state={location.pathname} replace></Navigate>
    }
    return children;

}

export default PrivateRoute