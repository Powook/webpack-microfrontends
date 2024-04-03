import { Link, Outlet } from "react-router-dom";
import { HEADER_LINKS } from "../constants/constants";
import styles from './App.scss';

export function App() {
  return (
    <div className={styles.app_wrapper}>
      <header className={styles.app_header}>
        <nav>
          <ul>
            {HEADER_LINKS.map(link=>(
              <li><Link className={styles.link} to={link.route}>{link.title}</Link></li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}