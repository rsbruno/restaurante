import styles from "./OrderStyles.module.scss";
import options from "./options.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface OrderComponentProps {
    order: string,
    setOrder: React.Dispatch<React.SetStateAction<string>>
}

export function OrderComponent({ order, setOrder }: OrderComponentProps) {
    const [open, setOpen] = useState(false);
    const nameOrder = order && options.find(option => option.value === order)?.nome;
    return (
        <button
            className={classNames({
                [styles.order]: true,
                [styles["order--active"]]: order !== ""
            })}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>{nameOrder || "Ordenar Por"}</span>
            {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.order__options]: true,
                [styles['order__options--active']]: open
            })}>
                {options.map(option => (
                    <div className={styles.order__option} key={option.value} onClick={() => setOrder(option.value)}>
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}