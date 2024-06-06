import App from '../App';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ErrorPage from '../pages/ErrorPage';
import UserPage from '../pages/User';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/user/',
                element: <UserPage />,
            },
            {
                path: '/user/signin',
                element: <SignIn />,
            },
            {
                path: '/user/signup',
                element: <SignUp />,
            },
        ],
    },
];

export default routes;
