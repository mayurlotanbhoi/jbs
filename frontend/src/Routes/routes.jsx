// src/routes.jsx
import React, { lazy } from 'react';
import Menu from '../pages/Dashboards/Transpoter/pages/Menu.jsx';
import EventPosts from '../pages/Dashboards/Transpoter/pages/EventPosts.jsx';
import Calendar from '../pages/Calendar.tsx';



// Public Routes
const LandingPage = lazy(() => import('../pages/Landing/LandingPage.jsx'));
const SignIn = lazy(() => import('../pages/Authentication/SignIn.jsx'));
const SignUp = lazy(() => import('../pages/Authentication/SignUp.jsx'));





const routes = [
    {
        path: '/',
        element: <LandingPage />,
        protected: false,
        title: 'Home Page | bjs',
        exact: true,
    },

    {
        path: '/auth',
        children: [
            {
                path: 'signin',
                element: <SignIn />,
                protected: false,
                title: 'Signin | bjs',
            },
            {
                path: 'signup',
                element: <SignUp />,
                protected: false,
                title: 'Signup | bjs',
            },
        ],
    },

    {
        path: '/dashboard',

        children: [
            {
                path: '',
                element: <Menu />,
                protected: true,
                roles: ['user', 'admin'],
                title: 'Dashboard | bjs',
            },
            {
                path: 'post/:eventId',
                element: <EventPosts />,
                protected: true,
                roles: ['user', 'admin'],
                title: 'Dashboard | bjs',
            },


        ],

    },

    {
        path: '/calendar',
        element: <Calendar />,
        protected: true,
        roles: ['user', 'admin', 'company'],
        title: 'Calendar | bjs',
    },




];

export default routes;
