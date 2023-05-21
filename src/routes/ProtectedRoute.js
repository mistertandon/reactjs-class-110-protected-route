import React, { useEffect, useState } from 'react';
import UserAuth from './../service/UserAuth';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={(props) => {

            if (UserAuth.getToken()) {

                return <Component {...props} />
            } else {
                return <Redirect to='/' />
            }

        }} />


    )
}

export default ProtectedRoute;