import { Button } from "@packages/shared";
import styles from './ErrorPage.scss'

export function ErrorPage() {
  return <div className={styles.errorPage}>
    <h1>Упс, страница не найдена</h1>
    <Button text="На главную" type="filled" onClick={()=>window.location.assign('/admin')}/>
  </div>
}