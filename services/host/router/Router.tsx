import { createBrowserRouter } from "react-router-dom";
import { App } from "../src/App";
//@ts-ignore
//@ts-ignore
import adminRoutes from 'admin/Router'
import { Suspense } from "react";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([{
  path:'/', // here TODO
  element: <App/>,
  children: [
    ...adminRoutes,
    {path: '*',
      element:<ErrorPage/>
    }
    // ...dashboardRoutes
//   {
//     path: "/admin2",
//     element: <div>ipsum</div>,
//     children: [
//         {
//             path: '/admin/about',
//             element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
//         },
//     ]
// },
// {
//   path: "/admin3",
//   element: <div>second</div>,
//   children: [
//       {
//           path: '/admin/about',
//           element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
//       },
//   ]
// },
// {
//   path: "/admin4",
//   element: <div>while</div>,
//   children: [
//       {
//           path: '/admin/about',
//           element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
//       },
//   ]
// },
// {
//   path: "/admin5",
//   element: <div>gang</div>,
//   children: [
//       {
//           path: '/admin/about',
//           element:  <Suspense fallback={'Loading...'}>Hello Admin</Suspense>
//       },
//   ]
// },
  ]
}
])
