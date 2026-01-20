import * as React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    let auth = JSON.parse(localStorage.getItem("account_id")) || false;
    return (
        auth ? <Outlet/> : <Navigate to="/" />
    )
}

export default PrivateRoutes;