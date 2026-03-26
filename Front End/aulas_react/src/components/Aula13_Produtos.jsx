const Aula13_Produtos = ({produto, botaoExcluir, botaoAlterar}) => {

    
    
    return(
        <div style={estilos.cardProduto}>
            <img src={produto.link_imagem} alt="" style={estilos.imagem}/>
            <h2 style={estilos.titulo}>{produto.nome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.preco). toFixed(2)}</p>
            <p>{produto.categoria}</p>
            {/* frete grátis*/}
            {produto.frete == true ? <p>Frete Grátis</p> : null}
            <a href={produto.link_produto} style={estilos.botao} target="blank">Ver Produto</a>
            <button style={estilos.botao} onClick={() => botaoExcluir(produto.id_produto)}>Excluir</button>
            <button style={estilos.botao} onClick={() => botaoAlterar(produto)}>Editar</button>
        </div>
    )
}

const estilos ={
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250,
        textAlign:'center'
    },


    imagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },


    titulo: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },


    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },


    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },


    freteGratis: {
        fontWeight: "bold"
    }
}

export default Aula13_Produtos