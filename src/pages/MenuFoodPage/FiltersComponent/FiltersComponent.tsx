import { Dispatch, SetStateAction } from "react";
import filtros from "./filters.json";
import styles from './FiltersStyles.module.scss';
import classNames from 'classnames'

type IOption = typeof filtros[0];

interface FiltersComponentProps {
    filter: number | null;
    setFilter: Dispatch<SetStateAction<number | null>>
}

export function FiltersComponent({ setFilter, filter }: FiltersComponentProps) {

    function selectFilter(option: IOption) {
        return setFilter(prev => prev === option.id ? null : option.id)
    }
    return (
        <div className={styles.filters}>
            {filtros.map(option => (
                <button
                    className={classNames({
                        [styles.filters__filter]: true,
                        // eslint-disable-next-line
                        ['styles.filters__filter--active']: filter === option.id,
                    })}
                    key={option.id} onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))
            }
        </div >
    )
}