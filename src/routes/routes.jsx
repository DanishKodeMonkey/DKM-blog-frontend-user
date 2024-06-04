import App from '../pages/App';
import Blog from '../pages/Blog';
import ErrorPage from '../pages/ErrorPage';

const routes = [
    { path: '/', element: <App />, errorElement: <ErrorPage /> },
    {
        path: 'blog',
        element: <Blog />,
    },
];

export default routes;
