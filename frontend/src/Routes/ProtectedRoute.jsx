// src/Routes/ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';



const ProtectedRoute = ({ roles = [], children }) => {
    const { isLogin: isAuthenticated } = useSelector((state) => state.auth);
    const userType = 'user'


    if (roles.length && !roles.includes(userType)) {
        return <Navigate to="/unauthorized" replace />;
    }
    return <> {children ? children : <Outlet />} </>;
};

export default ProtectedRoute;
