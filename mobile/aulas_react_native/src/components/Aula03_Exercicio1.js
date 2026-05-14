import { View , Text } from 'react-native'
import Hr from './Hr'
import { FlatList } from 'react-native-web'

const Aula03_Exercicio1 = () => {

    const turmas = [
        {id: 1, nome: '3ºB', materia:'matématica', media: 10, faltas:10},
        {id: 2, nome: '3ºA', materia:'matématica', media: 9 , faltas:9 },
        {id: 3, nome: '2ºA', materia:'matématica', media: 8 , faltas:8 },
        {id: 4, nome: '2ºB', materia:'matématica', media: 7 , faltas:7 },
    ]

    function exibirItensLista3 ( {item} ) {
        // Renderizando cada item da Lista de forma personalizada
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.id}º</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.nome}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.materia}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.media}</Text>
                <Text style={{flex: 1, textAlign: 'left'}}>{item.faltas}</Text>
            </View>
        )
    } 

    return(
        <View>
            < Hr />
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Notasdos Estudantes Sesi</Text>
            <FlatList
                data={ turmas } //Passar vetor com os dados a serem exibidos
                renderItem={ exibirItensLista3 } //Passar a função para exibir os itens
                keyExtractor={ item => item.id } //Passar função para extrair as chaves
                />
        </View>
    )
}

export default Aula03_Exercicio1