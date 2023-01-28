import logo from 'assets/logo.svg';
import styles from './ItemStyles.module.scss';
import menuData from '../itens.json'
import classNames from 'classnames';

type ItemProps = typeof menuData[0]

export function Item({ title, description, category, size, serving, price, photo }: ItemProps) {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2> {title} </h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={classNames({
                        [styles.item__type]: true,
                        [styles[`item__type__${category.label.toLowerCase()}`]]: true
                    })}>{category.label}</div>
                    <div className={styles.item__portion}>{size}g</div>
                    <div className={styles.item__qtdpeople}>Serve {serving} pessoas</div>
                    <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
}