import { Link, Outlet } from "react-router-dom";

export function App() {
  return <div>
    HOST
     <nav>
        <ul>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/admin/about">Admin about</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/a">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
  </div>
}