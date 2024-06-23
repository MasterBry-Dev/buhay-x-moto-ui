import { lazy } from 'react';
const Forum = lazy(() => import('../pages/Forum'));
const Error404 = lazy(() => import('../pages/Error404'));
const Landing = lazy(() => import('../pages/Landing'));
const Login = lazy(() => import('../pages/auth/Login'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Landing />,
        layout: 'landing',
    },
    {
        path: '/member-forum',
        element: <Forum />,
        layout: 'default',
    },
    {
        path: '*',
        element: <Error404 />,
        layout: 'blank',
    },

    

    {
        path: '/auth/login',
        element: <Login />,
        layout: 'blank',
    },
];

export { routes };
