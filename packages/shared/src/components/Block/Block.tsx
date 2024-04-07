import styles from './Block.scss'

export function Block({children}: {children: React.ReactNode}) {
    return <div className={styles.block}>{children}</div>
}