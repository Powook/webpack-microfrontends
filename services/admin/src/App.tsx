import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export function App() {
  return <div>
    <Suspense fallback={<div>loading</div>}>
    ADMIN
      <Outlet/>
      </Suspense>
  </div>
}