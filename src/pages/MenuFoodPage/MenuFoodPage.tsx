import styles from './MenuFoodStyles.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { Search } from './SearchComponent/SearchComponent'
import { useState } from 'react';
import { FiltersComponent } from './FiltersComponent/FiltersComponent';
import { OrderComponent } from './OrderComponent/OrderComponent';
import { Itens } from './ItensComponent/ItensComponent';


export function PageMenuFood() {

    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<number | null>(null);
    const [order, setOrder] = useState<string>('');

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
                <div className={styles.menufood__filters}>
                    <FiltersComponent filter={filter} setFilter={setFilter} />
                    <OrderComponent order={order} setOrder={setOrder} />
                </div>
                <Itens search={search} filter={filter} order={order} />

            </section>
        </main>
    </>
}