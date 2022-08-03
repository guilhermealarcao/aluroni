import stlyes from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Cardapio() {
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
        </main>
    )
}