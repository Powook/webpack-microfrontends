import { createBrowserRouter } from "react-router-dom";
import { App } from "../src/App";
//@ts-ignore
//@ts-ignore
import { Suspense } from "react";

export const router = createBrowserRouter([{
  path:'/',
  element: <App/>,
  children: [
    // ...adminRoutes,
    // ...dashboardRoutes
    {
      path: "/admin",
      element: <div>lorem</div>,
      children: [
          {
              path: '/admin/about',
              element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
          },
      ]
  },
  {
    path: "/admin",
    element: <div>ipsum</div>,
    children: [
        {
            path: '/admin/about',
            element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
        },
    ]
},
{
  path: "/admin",
  element: <div>second</div>,
  children: [
      {
          path: '/admin/about',
          element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
      },
  ]
},
{
  path: "/admin",
  element: <div>while</div>,
  children: [
      {
          path: '/admin/about',
          element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
      },
  ]
},
{
  path: "/admin",
  element: <div>gang</div>,
  children: [
      {
          path: '/admin/about',
          element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
      },
  ]
},
  ]
}
])
