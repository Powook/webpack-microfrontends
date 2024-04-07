import styles from  './Loader.scss'

export function Loader() {
    return (
        <div className={styles.loader_container}>
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    )
}