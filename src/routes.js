
import { createBrowserRouter } from "react-router-dom"
import App from "./App";
import {
    Dashboard,
    PageNotFound,
    Login,
    SignUp
} from "./pages";

import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute'


export default function getRoutes() {
    return createBrowserRouter([
        {
            element: <ProtectedRoute />,
            children: [
                {
                    path: '/',
                    element: <App />,
                    children: [
                        {
                            path: 'dashboard',
                            element: <Dashboard />
                        }
                    ]
                }
            ]
        },
        {
            element: <PublicRoute />,
            children: [
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/signUp',
                    element: <SignUp />
                }
            ]
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ]);
}