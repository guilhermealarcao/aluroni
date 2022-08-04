import styles from "./Itens.module.scss";
import cardapio from './itens.json';
import Item from "./Item";
import { useEffect, useState } from "react";


interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

export default function Itens(props: Props) {

    const { busca, filtro, ordenador } = props;

    const [lista, setLista] = useState(cardapio)



    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    }


    function testeFiltro(id: number) {
        if (filtro !== null) return filtro == id;
        return true
    }


    const ordenarPropriedadeCrescente = (
        lista: typeof cardapio,
        propriedade: "size" | "serving" | "price"
    ) => {
        return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
    };



    function ordenar(lista: typeof cardapio, ordernador: string) {
        
        switch (ordernador) {
            case 'porcao':
                lista = ordenarPropriedadeCrescente(lista, "size");
                break;
            case 'qtd_pessoas':
                lista = ordenarPropriedadeCrescente(lista, "serving");
                break;
            case 'preco':
                lista = ordenarPropriedadeCrescente(lista, "price");
                break;
            default:
                return lista
        }
        return lista;
    }

    useEffect(() => {
        const novaList = cardapio.filter(item => testaBusca(item.title) && testeFiltro(item.category.id));
        setLista(novaList);
        setLista(ordenar(novaList, ordenador));
    }, [busca, filtro, ordenador]);


    return (
        <div className={styles.itens}>
            {lista.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </div>
    )
}