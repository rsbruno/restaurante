import menuData from './itens.json';
import { Item } from './ItemComponent/ItemComponent';
import styles from './ItensStyles.module.scss';

export function Itens() {
    return (
        <div className={styles.itens}>
            {menuData.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}