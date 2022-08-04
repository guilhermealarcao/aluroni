import React from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from 'react-icons/cg';
import Filtro from "componentes/Filtro";

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca }: Props) => {
    return (
        <>
            <div className={styles.buscador}>
                <input
                    value={busca}
                    onChange={(evento) => setBusca(evento.target.value)}
                />
                <CgSearch />
            </div>
            <Filtro />
        </>
    )
}

export default Buscador;