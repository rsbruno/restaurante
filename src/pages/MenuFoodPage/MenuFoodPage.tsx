import styles from './MenuFoodStyles.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { Search } from './SearchComponent/SearchComponent'
import { useState } from 'react';


export function PageMenuFood() {

    const [search, setSearch] = useState<string>('');


    return <>
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.menufood}>
                <h3 className={styles.menufood__title}>Cardápio</h3>
                <Search search={search} setSearch={setSearch} />
            </section>
        </main>
    </>
}