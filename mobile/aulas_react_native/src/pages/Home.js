import {View, Text, Button} from 'react-native'

//Recebemos como props o navigation, para podermos navegar entre as telas
function Home({navigation}) {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d5edb9'}}>
        <Text style={{fontSize: 30}}>TELA PRINCIPAL</Text>
        {/* Nos botões, no onPress dizemos para qual tela queremos navegar */}
        {/* Navegar para a página de Cadastro */}
        <Button title='Tela de Cadastro' onPress={()=> navigation.navigate('Cadastro')} />
        {/* Navegar para a página de Cadastro */}
        <Button title='Tela de Relatório' onPress={()=> navigation.navigate('Relatorio')} />
        <Button title='Tela de Gráficos' onPress={()=> navigation.navigate('Graficos')} />
      </View>  
    )
}

export default Home