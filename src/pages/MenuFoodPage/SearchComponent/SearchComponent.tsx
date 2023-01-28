import { Dispatch, SetStateAction } from "react";
import styles from './SearchStyles.module.scss'
import { CgSearch } from "react-icons/cg";

interface SearchProps {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>
}

export function Search({ search, setSearch }: SearchProps) {
    return <>
        <div className={styles.search}>
            <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder='Buscar'
            />
            <CgSearch size={20} color="#4C4D5E" />
        </div>
    </>
}