import valores from './index.json';
import styles from './Filtro.module.scss';

type IOpcao = typeof valores[0];

export default function Filtro() {


    function selecionarFiltro(opcao: IOpcao){

        console.log(opcao.id)


    }

    return (
        <div className={styles.filtros}>
            {valores.map((opcao: IOpcao) => (
                <button className={styles.filtros__filtro} key={opcao.id} value={opcao.id} onClick={()=> selecionarFiltro(opcao)} >{opcao.label}</button>
            ))}
        </div>
    )
}