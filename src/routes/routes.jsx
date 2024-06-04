import App from '../pages/App';
import Blog from '../pages/Blog';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ErrorPage from '../pages/ErrorPage';

const routes = [
    { path: '/', element: <App />, errorElement: <ErrorPage /> },
    {
        path: 'blog',
        element: <Blog />,
    },
    { path: 'signup', element: <SignUp /> },
    { path: 'signin', element: <SignIn /> },
];

export default routes;
