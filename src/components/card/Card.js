import styles from './styles.module.css'

export const Card = ({ children }) => {
    return (
        <div className={styles.cardContainer}>
            {children}
        </div>
    )
}