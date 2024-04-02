import {createBrowserRouter} from "react-router-dom";
import {Suspense} from "react";
import { App } from "@/App";

const routes = [
    {
        path: "/dashboard",
        element: <App />,
    },
]

export const router = createBrowserRouter(routes);

export default routes;