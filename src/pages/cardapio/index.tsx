import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "componentes/Buscador";
import { useState } from "react";
import Filtro from "componentes/Filtro";
import Ordenador from "componentes/Ordenador";

export default function Cardapio() {

    const [texto, setTexto] = useState('');

    const [filtro, setFiltro] = useState<number | null>(null);

    const [ordenador, setOrdenador] = useState('');

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Casa da massa do código
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={texto} setBusca={setTexto} />
                <div className={styles.cardapio__filtros}>
                    <Filtro filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={(valor) => setOrdenador(valor)} />
                </div>
            </section>
        </main>
    )
}