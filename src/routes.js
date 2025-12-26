
import { createBrowserRouter } from "react-router-dom"
import { Dashboard, PageNotFound } from "./pages";
import App from "./App";


export default function getRoutes() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
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
        }
    ])
    return routes;
}