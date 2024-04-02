import { createBrowserRouter } from "react-router-dom";
import { App } from "../src/App";
//@ts-ignore
import adminRoutes from 'admin/Router'
//@ts-ignore
import dashboardRoutes from 'dashboard/Router'

export const router = createBrowserRouter([{
  path:'/',
  element: <App/>,
  children: [
    ...adminRoutes,
    ...dashboardRoutes
  ]
}
])
