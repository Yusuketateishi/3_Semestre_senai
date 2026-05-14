import { View , Text, Image } from 'react-native'
import Hr from './Hr'
import { FlatList } from 'react-native-web'

const Aula03_Exercicio2 = () => {

    const turmas = [
        {id:'id',foto:'',nome:'nome',categoria:'categoria', preco:'preço',estoque:'estoque'},
        {id: 1,foto:'https://veja.abril.com.br/wp-content/uploads/2019/01/ovo-1.png' , nome: 'Ovo', categoria:'Alimento', preco: 10.00, estoque:120},
        {id: 2,foto:'https://cdn.awsli.com.br/954/954868/produto/68627041/40c163f71e.jpg' , nome: 'Notebook', categoria:'Eletronico', preco:1200.00 , estoque:10 },
        {id: 3,foto:'https://storage.googleapis.com/propcart-br.appspot.com/images%2Fitems%2FZDo2UPcBdzhr1CniYN8i_1684855933547.jpg' , nome: 'Livro', categoria:'Livro', preco:200.00 , estoque:15 },
        {id: 4,foto:'https://preview.redd.it/sonics-devious-side-eye-is-a-sprite-from-sonic-cds-main-v0-5d1boagd8yef1.png?width=504&format=png&auto=webp&s=7b12f4a44a350260839a1d32dc8a0547d9e07775' , nome: 'Jogo', categoria:'Vídeo Game', preco: 100.00 , estoque:20 },
    ]

    function exibirItensLista4 ( {item} ) {
        // Renderizando cada item da Lista de forma personalizada
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.id}º</Text>
                <Image style={{flex: 1, textAlign: 'left',  width:'50px', height:'50px'}} source={item.foto} />
                <Text style={{flex: 1, textAlign: 'left'}}>{item.nome}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.categoria}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.preco}º</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.estoque}º</Text>
            </View>
        )
    } 

    return(
        <View>
            < Hr />
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Notasdos Estudantes Sesi</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{flex: 1, textAlign: 'left', fontWeight: 'bold'}}>id</Text>
                <Text style={{flex: 1, textAlign: 'left', fontWeight: 'bold'}}>foto</Text>
                <Text style={{flex: 1, textAlign: 'left', fontWeight: 'bold'}}>nome</Text>
                <Text style={{flex: 1, textAlign: 'left', fontWeight: 'bold'}}>categoria</Text>
                <Text style={{flex: 1, textAlign: 'left', fontWeight: 'bold'}}>preço</Text>
                <Text style={{flex: 1, textAlign: 'left', fontWeight: 'bold'}}>estoque</Text>
            </View>
            <FlatList
                data={ turmas } //Passar vetor com os dados a serem exibidos
                renderItem={ exibirItensLista4 } //Passar a função para exibir os itens
                keyExtractor={ item => item.id } //Passar função para extrair as chaves
                />
        </View>
    )
}

export default Aula03_Exercicio2