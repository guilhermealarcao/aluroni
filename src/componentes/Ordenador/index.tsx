import stlyes from "./Ordenador.module.scss";
import valores from './opcoes.json';

type IItem = typeof valores[0];

export default function Ordernador() {
    return (
        <button className={stlyes.ordenador}>
            <span>Ordernador por</span>
            <div className={stlyes.ordenador__options}>
                {valores.map(item => (
                    <div key={item.value} className={stlyes.ordenador__option}>
                        ${item.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}