
import { createBrowserRouter } from "react-router-dom"
import { Home, PageNotFound } from "./pages";
import App from "./App";


export default function getRoutes() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    path: '/home',
                    element: <Home/>
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