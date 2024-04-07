import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import {Block} from "@packages/shared"
import styles from './App.scss'
import { Slider } from "./components/Slider/Slider";

export function App() {
  return <div>
    <Suspense fallback={<div>loading</div>}>
    <Block>
      <Slider/>
    </Block>
      <Outlet/>
      </Suspense>
  </div>
}