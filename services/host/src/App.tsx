import { Link, Outlet } from "react-router-dom";
import { HEADER_LINKS } from "../constants/constants";
import {Button} from '@packages/shared'

import styles from './App.scss';
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <div className={styles.app_wrapper}>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}