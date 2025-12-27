
import { createBrowserRouter } from "react-router-dom"
import App from "./App";
import {
    Dashboard,
    PageNotFound,
    Login
} from "./pages";


export default function getRoutes() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: '/dashboard',
                    element: <Dashboard/>
                },
                {
                    path: '*',
                    element: <PageNotFound/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login/>
        }
    ])
    return routes;
}