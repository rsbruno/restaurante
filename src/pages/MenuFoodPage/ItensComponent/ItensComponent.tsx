import menuData from './itens.json';
import { Item } from './ItemComponent/ItemComponent';
import styles from './ItensStyles.module.scss';
import { useEffect, useState } from 'react';

interface ItensProps {
    search: string;
    filter: number | null;
    order: string;
}

export function Itens({ search, filter, order }: ItensProps) {

    const [menuList, setMenuList] = useState<typeof menuData[0][]>([]);


    function handleOrder(newList: typeof menuData) {
        switch (order) {
            case 'porcao':
                return newList.sort((a, b) => a.size > b.size ? 1 : -1)
            case 'qtd_pessoas':
                return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
            case 'preco':
                return newList.sort((a, b) => a.price > b.price ? 1 : -1)
            default:
                return newList
        }
    }

    useEffect(() => {
        setMenuList(
            handleOrder(menuData
                .filter(l => l.title.toLowerCase().includes(search.toLowerCase())
                    && (!!filter ? l.category.id === filter : true)
                )
            )
        )
    }, [search, filter, order])


    return (
        <div className={styles.itens}>
            {menuList.map(item => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}