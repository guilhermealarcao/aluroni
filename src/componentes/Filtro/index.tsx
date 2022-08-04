import valores from './index.json';
import styles from './Filtro.module.scss';
import classNames from 'classnames';

type IOpcao = typeof valores[0];


interface Props {
    filtro: number | null;
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtro({ filtro, setFiltro }: Props) {
    function selecionarFiltro(opcao: IOpcao) {
        if (filtro === opcao.id) return setFiltro(null);
        setFiltro(opcao.id);
    }
    return (
       <div className={styles.filtros}>
        {valores.map(opcao => (
          <button className={classNames({
            [styles.filtros__filtro]: true,
            [styles['filtros__filtro--ativo']]: filtro === opcao.id
          })} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
            {opcao.label}
          </button>
        ))}
      </div>
    )
}