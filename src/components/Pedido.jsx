import { useState } from "react"

//ARRAY DE OBJETOS CONTENDO O ESTADO INICIAL DO CARDÁPIO
const cardapio = [
    {id:1, nome:'Combo-01', preco: 25.00, disponivel: false, quantidade:0},
    {id:2, nome:'Combo-02', preco: 35.00, disponivel: true, quantidade:0},
    {id:3, nome:'Combo-03', preco: 45.00, disponivel: false, quantidade:0},
    {id:4, nome:'Combo-04', preco: 55.00, disponivel: true, quantidade:0}
]


const Pedido = () => {

    // hook- useState - manipula o sestado da variavel
    // Estados para gerenciar a lista de items do cardapio

    const [items, setItems] = useState(cardapio);
    const [status, setStatus] = useState("");
    const [enviar, setEnviar] = useState(false);

    // valor fixo adicionado ao total quando tiver no carrinho
    const taxaEntrega = 5.00;

    // função que altera a quantidade do pedido
    const AlterarQuantidade = (id, valor) => {
        setItems(alt=>

            // Map: cria um novo array e percorre os items sem modificar o original (imutabilidade)
            // Ternario: verifica se o item da iteração atual é o que deve ser alterado
            // Spred (...item) - mantem os valores antigos e adiciona os novos
            // Math.max: objeto que garante que a quantidade nunca será maior que 0
            alt.map(item=>
                item.id === 0 ? {...item,quantidade:Math.max(0,item.quantidade + valor)}: item
            )
        )
    } 

    // filter: seleciona apenas os produtos disponíveis no carrinho
    const produtosDisponiveis = items.filter(item=>item.disponivel);
    const carrinho = items.filter(item=> item.quantidade > 0);

    // reduce : calcula soma dos item (preço * quantidade) e adiciona a taxa de entrega
    const subTotal = carrinho.reduce((ac,item)=> ac + item.preco * item.quantidade, 0);
    const total = subTotal > 0 ? subTotal + taxaEntrega : 0;

    // simulação do ciclo de vida da entrega usando temporizador assíncrono
    const ConfirmarPedido=()=> {
        setEnviar(true)
        setStatus('Restaurante confirmou seu Pagamento, Preparando seu pedido')
        setTimeout(() => {
            setStatus ('Seu Pedido saiu para Entrega')
            setEnviar(false)
        }, 5000); //5 segundos

        setTimeout(() => {
            setStatus('Código Confirmado. Seu Pedido foi entregue com sucesso')
        }, 10000); //10 segundos
    }

  return (
    <>
      
    </>
  )
}

export default Pedido
