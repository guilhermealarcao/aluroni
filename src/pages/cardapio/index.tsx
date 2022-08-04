import stlyes from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "componentes/Buscador";
import { useState } from "react";

export default function Cardapio() {

    const [texto, setTexto] = useState('');

    return (
        <main>
            <nav className={stlyes.menu}>
                <Logo />
            </nav>
            <header className={stlyes.header}>
                <div className={stlyes.header__text}>
                    Casa da massa do código
                </div>
            </header>
            <section>
                <h3 className={stlyes.cardapio__titulo}>Cardápio</h3>
                <Buscador 
                    busca={texto} 
                    setBusca={setTexto}
                />
            </section>
        </main>
    )
}