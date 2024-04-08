import { Button } from "@packages/shared";
import { Link } from "react-router-dom";
import styles from './Header.scss'
import { HEADER_LINKS } from "../../../constants/constants";

export function Header() {
  return (
    <header className={styles.app_header}>
        <nav>
          <ul>
            {HEADER_LINKS.map(link=>(
              <li><Link className={styles.link} to={link.route}>{link.title}</Link></li>
            ))}
          </ul>
        </nav>  
        <input placeholder="Поиск..." className={styles.header_input}/>
        <div className={styles.buttons_block}>
          <Button onClick={()=>console.log('123')} text="Войти"/>
          <Button onClick={()=>console.log('123')} text="Регистрация"/>
        </div>
      </header>
  )
}