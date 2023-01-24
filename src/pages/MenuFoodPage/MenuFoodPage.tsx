import styles from './MenuFoodStyles.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'


export function PageMenuFood() {
    return <>
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
        </main>
    </>
}