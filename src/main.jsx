import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './AuthContext.jsx';
import App from './App.jsx';
import routes from './routes/routes.jsx';
import './styles/index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </AuthProvider>
    </React.StrictMode>
);
