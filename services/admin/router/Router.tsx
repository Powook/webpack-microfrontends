import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import { App } from "@/App";

const routes = [
    {
        path: "/admin",
        element: <App />,
        children: [
            {
                path: '/admin/about',
                element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;