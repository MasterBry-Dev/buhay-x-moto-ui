import { lazy } from 'react';
const Forum = lazy(() => import('../pages/Forum'));
const Error404 = lazy(() => import('../pages/Error404'));
const Landing = lazy(() => import('../pages/Landing'));
const Login = lazy(() => import('../pages/auth/Login'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Forum />,
        layout: 'default',
    },
    {
        path: '/*',
        element: <Error404 />,
        layout: 'blank',
    },

    {
        path: '/landing',
        element: <Landing />,
        layout: 'landing',
    },

    {
        path: '/auth/login',
        element: <Login />,
        layout: 'blank',
    },
];

export { routes };
