import styles from "./Ordenador.module.scss";
import valores from './opcoes.json';
import { useState } from "react";
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

type IItem = typeof valores[0];

interface Props {
    ordenador: string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordernador({ ordenador, setOrdenador }: Props) {


    const [aberto, setAberto] = useState(false);


    const ordenadoText = ordenador && valores.find(item => item.value == ordenador)?.nome;


    return (
        <button
            className={classNames({
                [styles.ordenador]: true,
                [styles['ordenador--ativo']]: ordenador !== ""
            })}

            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}

        >
            <span>{ ordenadoText || "Ordernador por"} </span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles['ordenador__options--ativo']]: aberto
            })}>
                {valores.map(item => (
                    <div key={item.value}
                        onClick={() => { setOrdenador(item.value) }}
                        className={styles.ordenador__option}>
                        {item.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}