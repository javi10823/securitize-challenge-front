import styles from './styles.module.css'

export const Row = ({children}) => {
    return (
        <div className={styles.row}>
            {children}
        </div>
    )
}