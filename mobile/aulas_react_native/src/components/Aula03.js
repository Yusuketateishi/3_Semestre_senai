import { View , Text } from 'react-native'
import Hr from './Hr'
import { FlatList } from 'react-native-web'
import Aula03_Exercicio1 from './Aula03_Exercicio1'
import Aula03_Exercicio2 from './Aula03_Exercicio2'

const Aula03 = () => {

    const turmas = [
        {id: 1, turma: '3ºB', pontuacao: 10},
        {id: 2, turma: '3ºA', pontuacao: 9},
        {id: 3, turma: '2ºA', pontuacao: 8},
        {id: 4, turma: '2ºB', pontuacao: 7},
    ]

    function exibirItensLista ( {item} ) {
        // Renderizando cada item da Lista de forma personalizada
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.id}º</Text>
                <Text>{item.turma}º</Text>
            </View>
        )
    } 
    function exibirItensLista2 ( {item} ) {
        // Renderizando cada item da Lista de forma personalizada
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.id}º</Text>
                <Text>{item.turma}º</Text>
                <Text>{item.pontuacao}º</Text>
            </View>
        )
    } 

    return(
        <View>
            < Hr />
            <Text>Aula03 - Listas com FlatList</Text>
            <Text>Aprendendo a manipular listas em React Native</Text>
            <Hr />
            {/* Criando listas com função ,map() */}
            {
                turmas.map( (item) => (
                    <Text key={item.id}> Turma: {item.turma} </Text>
                ) )
            }
            <Hr />
            {/* Criando listas utilizando componente FlatList */}
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Lista com Flatlist</Text>
            <FlatList
                data={ turmas } //Passar vetor com os dados a serem exibidos
                renderItem={ exibirItensLista } //Passar a função para exibir os itens
                keyExtractor={ item => item.id } //Passar função para extrair as chaves
                />
            {/* Criando Classificação do interclasse SESI */}
            <Hr/>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>interclasse SESI</Text>
            <FlatList
                data={ turmas } //Passar vetor com os dados a serem exibidos
                renderItem={ exibirItensLista2 } //Passar a função para exibir os itens
                keyExtractor={ item => item.id } //Passar função para extrair as chaves
                />
            <Hr/>
            <Aula03_Exercicio1/>
            <Hr/>
            <Aula03_Exercicio2/>
        </View>
    )
}

export default Aula03